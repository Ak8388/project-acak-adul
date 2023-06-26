import React from 'react'
import { useState } from 'react'
import Card from '../../components/Card/Card'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom'

const dashValue = [
    {
        id:1,
        name:"Tisna",
        photos:"https://pbs.twimg.com/profile_images/1195500091341234176/mKJRu5Dt_400x400.jpg",
        price:"Rp 19.000"
    },
    {
        id:2,
        name:"Joko",
        photos:"https://aktual.com/wp-content/uploads/2021/07/Firaun-dalam-alquran-bag-2-1.jpg",
        price:"Rp 19.000"
    },
    {
        id:3,
        name:"Mukidi",
        photos:"https://media.hitekno.com/thumbs/2022/06/11/19468-bocah-sd-yang-main-menggunakan-topeng-ini-bikin-netizen-salfok-tiktok-atsipalinginsecure-67/730x480-img-19468-bocah-sd-yang-main-menggunakan-topeng-ini-bikin-netizen-salfok-tiktok-atsipalinginsecure-67.jpg",
        price:"Rp 17.000"
    },
    {
        id:4,
        name:"Jamil",
        photos:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhY3ze-nJZCTabQ2KxWord3JPOiBNULx4Cg&usqp=CAU",
        price:"Rp 20.000"
    },
    {
        id:5,
        name:"Susi Jumba",
        photos:"https://pbs.twimg.com/media/FcgckjuakAAvqts.jpg",
        price:"Rp 19.000"
    },
    {
        id:6,
        name:"Jokowidodo",
        photos:"https://cdnwpseller.gramedia.net/wp-content/uploads/2022/12/siapa-joko-kendil-3.png",
        price:"Rp 19.000"
    }
]

export default function Dashboard() {
    const [search,setSearch]=useState('');
    const [sort,setSort]=useState('Asc');
    const [sortBy,setSortBy]=useState('');
    const nav = useNavigate();

    let fil = dashValue.toSorted((a,b)=>{
        if(sort == 'Asc'){
            return a[sortBy] < b[sortBy] ? -1:1; 
        }else{
            return a[sortBy] > b[sortBy] ? -1:1; 
        }
    }).filter((value)=> value.name.toLowerCase().includes(search))
    

    const ganti = (e)=>{
        nav(`/detail-product/${e}`)
    }

  return (
    <div>
        <div id='search'>
            <div>
                <input className='sch' type="text" value={search} placeholder='Name...' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div>
                <select onChange={(e) => setSortBy(e.value.target)} className='sch' name="" id="">
                    <option value="id">ID</option>
                    <option value="name">Nama Product</option>
                    <option value="price">Harga Product</option>
                </select>
            </div>
            <div>
                <select onChange={(e) => setSort(e.value.target)} className='sch' name="" id="">
                    <option value="Asc">Asc</option>
                    <option value="Dsc">Desc</option>
                </select>
            </div>
        </div>
        <div id='container'>
            {
                fil.map((value)=>{
                    return <Card key={value.id}>
                        <img src={value.photos} alt="" className='img-contain' /><br /><br />
                        <p className='nm-con con'>{value.name}</p><br />
                        <p className='pr-con con'>{value.price}</p>
                        <br />
                        <button onClick={()=>ganti(value.id)}>Detail Barang</button>
                    </Card>
                })
            }
        </div>
    </div>
  )
}
