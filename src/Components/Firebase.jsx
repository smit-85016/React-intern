import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { CircularProgress, IconButton, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import "../App.css";
import CircleIcon from '@mui/icons-material/Circle';
import { Delete } from '@mui/icons-material';

const Firebase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  function Read() {
    setLoading(true)
    const content = query(collection(db, 'test'))
    onSnapshot(content, (snapshot) => {
      setData(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
      setLoading(false)
    })
  }
  async function Write() {
    if (!document.getElementById('text').value) return;

    try {
      await addDoc(collection(db, 'test'), {
        content: document.getElementById('text').value,
      }).then(() => {
        console.log('Document successfully written!');
      });
    } catch (err) {
      alert(err)
    }
  }
  async function UploadImage() {
    if (!document.getElementById('image').value) return;
    try {
      await addDoc(collection(db, 'images'), {
        url: document.getElementById('image').value,
      }).then(() => {
        console.log('Document successfully written!');
      });
    } catch (err) {
      console.error(err)
    }
  }
  async function GetImages() {
    setImageLoading(true)
    const content = query(collection(db, 'images'))
    onSnapshot(content, (snapshot) => {
      setImage(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
      setImageLoading(false)
    })
  }
  return (
    <>
      <div className="w-full h-full bg-gray-800 flex flex-col gap-3 justify-center items-center py-5" style={{
        width: "100vw",
        overflowX: "hidden",
      }}>
        <div className="flex flex-col w-[50%] gap-2 mt-5">
          <textarea className="w-full h-1/2 bg-gray-700 text-white" id='text'></textarea>
          <div className="flex">
            <button className="mr-2 p-2 bg-cyan-500 text-black rounded-lg" onClick={Read}>Read</button>
            <button className="mr-2 p-2 bg-cyan-500 text-black rounded-lg" onClick={Write}>Write</button>
          </div>
          <div className="flex flex-col gap-2">
            {loading && <div className='flex justify-center items-center w-full'>
              <CircularProgress color='primary'></CircularProgress>
            </div>}
            {data.length > 0 && <h1>Content:</h1>}
            <List className="flex justify-start flex-col" >
              {!loading && data?.map((item, index) => (
                <ListItem key={index} className='flex items-center gap-1'>
                  <ListItemButton>
                    <div className='flex justify-between items-center w-full'>
                      {item?.data?.content}
                      <ListItemIcon >
                        <IconButton onClick={() => {
                          let document = doc(db, 'test', item.id);
                          deleteDoc(document).then(() => {
                            console.log('Document successfully deleted!');
                            Read();
                          }).catch((error) => {
                            console.error('Error removing document: ', error);
                          });
                        }}>
                          <Delete className='text-white' />
                        </IconButton>
                      </ListItemIcon>
                    </div>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <div className="flex flex-col w-[50%] gap-2">
          <input type="text" className="w-full h-1/2 bg-gray-700 text-white p-2 rounded-lg" placeholder='Enter Image Url' id='image' />
          <div className="flex">
            <button className="mr-2 p-2 bg-cyan-500 text-black rounded-lg" onClick={GetImages}>Get Images</button>
            <button className="mr-2 p-2 bg-cyan-500 text-black rounded-lg" onClick={UploadImage}>Upload Image</button>

          </div>
          <div className="flex flex-col gap-2">
            {imageLoading && <div className='flex justify-center items-center w-full'>
              <CircularProgress color='primary'></CircularProgress>
            </div>}
            {image.length > 0 && <h1>Images:</h1>}
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
              {!imageLoading && image?.map((item, index) => {
                // console.log(item)
                return <ImageListItem key={index}>
                  <img
                    src={`${item.data.url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.data.url}?w=164&h=164&fit=crop&auto=format`}
                    alt={index + "Image"}
                    loading="lazy"
                    className='max-h-[150px]'
                  />
                  <ImageListItemBar
                    style={{
                      color: "white"
                    }}
                    title="Delete Image"
                    actionIcon={
                      <IconButton onClick={() => {
                        let document = doc(db, 'images', item.id);
                        deleteDoc(document).then(() => {
                          console.log('Document successfully deleted!');
                          GetImages();
                        }).catch((error) => {
                          console.error('Error removing document: ', error);
                        });
                      }}>
                        <Delete className='text-white' />
                      </IconButton>
                    }
                  />
                </ImageListItem>

              })}
            </ImageList>
          </div>
        </div>
      </div>
    </>
  )
}

export default Firebase