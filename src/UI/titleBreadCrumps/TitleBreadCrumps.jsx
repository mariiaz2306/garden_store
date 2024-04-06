import React from 'react'
import s from './TitleBreadCrumps.module.css'
import BreadcrumpsMain from '../breadcrumpsMain/BreadcrumpsMain'

export default function TitleAndBreadCrumbs({ title, breadcrumbs, classTitleContainer }) {
  return (
    <div className={`${classTitleContainer} ${s.title_container}`}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.line}></div>
      <BreadcrumpsMain breadcrumbs={breadcrumbs} />
    </div>
  )
}
