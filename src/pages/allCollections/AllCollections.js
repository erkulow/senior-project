/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAsyncProducts } from '../../store/productSlice'
import { Header } from '../../components/header/Header'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { SearchBar } from '../../components/Layout/SearchBar'
import { Footer } from '../../components/footer/Footer'
import { BanerImg1 } from '../../components/UI/Baner'
import { Pagination } from '../../components/UI/Pagination'
import { Products } from './Layout/Products'
import { ScrollTop } from '../../components/Layout/ScrollTop'
import { ContentBaner } from '../home/Layout/ContentBaner'
import { StockBlock } from '../home/Layout/StockBlock'
import { Trending } from '../../components/Layout/Trending'
import { Advertising } from '../home/Layout/Advertising'

const Blog = () => {
   const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams()
   const { products } = useSelector((state) => state.product)

   const allcollections = (
      <AllCollectionBlock>
         <AiOutlineAlignRight color="white" fontSize="20px" />
         <p>ALL COLLECTIONS</p>
      </AllCollectionBlock>
   )

   const [currentPage, setCurrentPage] = useState(1)
   const [productsPerPage, setProductsPage] = useState(4)
   const pageChangeHandler = (numberPage) => {
      setSearchParams({ page: numberPage })
      dispatch(getAsyncProducts(numberPage))
      setCurrentPage(numberPage)
   }
   const indexOfLastProduct = currentPage * productsPerPage
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage
   const currentProduct = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
   )
   useEffect(() => {
      dispatch(getAsyncProducts())
   }, [])

   return (
      <>
         <Header />
         <ScrollTop />
         <SearchBar />
         <NavigateLink allcollections={allcollections} />
         <ContentBaner />
         <StockBlock />
         <Trending />
         <Advertising />
         <BanerImg1 />
         <PaginationContainer>
            <Products currentProduct={currentProduct} />
         </PaginationContainer>
         <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            onPageChange={pageChangeHandler}
         />
         <Footer />
      </>
   )
}
const AllCollectionBlock = styled.div`
   width: 250px;
   height: 70px;
   background: #7ac751;
   display: flex;
   justify-content: center;
   align-items: center;
   p {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 17px;
      color: #fff;
      margin: 0;
      padding-left: 5px;
   }
`
const PaginationContainer = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 15px;
`
export default Blog