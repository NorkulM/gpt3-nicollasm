import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const articleData = [
  {
    title:"GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Dec 12, 2022",
    imgUrl: blog01,
  },
  {
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Dec 12, 2022",
    imgUrl: blog02,
  },
  {
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Dec 12, 2022",
    imgUrl: blog03,
  },
  {
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Dec 12, 2022",
    imgUrl: blog04,
  },
  {
    title: "GPT-3 and Open AI is the future. Let us explore how it is?",
    date: "Dec 12, 2022",
    imgUrl: blog05,
  },
]

const Blog = () => {
 const [ firstValue, ...rest ] = articleData
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={firstValue.imgUrl} title={firstValue.title} date={firstValue.date} />
        </div>
        <div className='gpt3__blog-container_groupB'>
        {rest.map((item, index) => (
          <Article imgUrl={item.imgUrl} title={item.title} date={item.date} key={index} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
