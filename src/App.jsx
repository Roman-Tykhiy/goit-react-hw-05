import { useEffect, useState } from 'react';
import s from "./App.module.css"
import SearchBar from './components/SearchBar/SearchBar';
import * as imagesService from './cervise/Apy';
import ImageGallery from './components/ImageGalery/ImegeGalery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessege/ErrorMessege';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';
import toast from 'react-hot-toast';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await imagesService.fetchImages(
          query,
          page
        );
        const mes = () => {
          if (results.length) {
            return toast.success("Знайдено картки")
          }
        }
        mes();
        if (!results.length) {
          toast.error("Карток не знайдено")
          return setIsEmpty(true);
          
        }
      
        setImages(prev => [...prev, ...results]);
        setIsVisible(page < total_pages)
        } catch (error) {
        setError(error.message);
        toast("Сервер не відповідає")
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setIsEmpty(false);
    setIsVisible(false);
    setPage(1);
    setError(null);
  };
  const onLoadMore = () => {
    setPage(perPage => perPage + 1);
  };
  const openModal = (src, alt, description) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
    setModalDescription(description);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc('');
    setModalAlt('');
    setModalDescription('');
  };
  return (
    <>
      {!modalIsOpen && <SearchBar onSearch={handleSetQuery} />}
      <div className={s.container}>
        {!images.length && !isEmpty && !error && (
            "Введіть дані для пошуку")}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {isLoading && <Loader />}
        {isVisible && (
          <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
            {isLoading ? 'Завантаження...' : 'Завантажити більше'}
          </LoadMoreBtn>
        )}
        {isEmpty && <ErrorMessage isEmpty={isEmpty} />}
        {error &&   <p>Щось пішло не так</p>}
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          src={modalSrc}
          alt={modalAlt}
          description={modalDescription}
        />
      </div>
    </>
  );
}

export default App;































// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SerchBox from "./components/SerchBox/SerchBox";
// import { useEffect, useState } from "react";
// import s from "./components/App.module.css"

// const App = () => {
//   const myContact = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ]
 
//   const [value, setValue] = useState("");
//   const serchValue = (e) => { 
//     setValue(e.target.value.trim())
//   };
 
//   const [contacts, setContacts] = useState(() => {
//     const storedContacts = localStorage.getItem("saveList");
//     return storedContacts ? JSON.parse(storedContacts) : myContact;
//   });
//   useEffect(() => {
//     localStorage.setItem("saveList", JSON.stringify(contacts));
//   }, [contacts]);
//   const handleSubmit = (values, actions) => {
//     actions.resetForm();
//     const newContact = {
//       id: crypto.randomUUID(),
//       name: values.name,
//       number: values.phone
//     }
//     setContacts(prev => [...prev, newContact])
//   };
//    const filterContact = contacts.filter(e => {
//     return e.name.toLowerCase().includes(value.toLowerCase())
//   });
//   const handleDelete = (id => {
//     const newList = contacts.filter(item => item.id !== id);
//     setContacts(newList)
//   })
//   const noContact = "No contacts. Please add a new contact";
  
//   return (
//     <>
//       <div className={s.Form}>
//        <h1 className={s.Title}>Phonebook</h1>
//       <ContactForm handleSubmit={handleSubmit}/>
//       {contacts.length === 0 ? ("") : <SerchBox serchValue={serchValue}/>}
//         {contacts.length === 0 ? (<span className={s.messege}>{noContact}</span>) : <ContactList myContact={filterContact} handleDelete={handleDelete}/>}
//       </div>
      
    
//     </>
//   ) 
// };

// export default App;