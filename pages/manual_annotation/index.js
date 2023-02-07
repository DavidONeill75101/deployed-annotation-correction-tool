import React, { Component, useState, useEffect } from 'react';

import { useRouter } from 'next/router'

import { useUser } from "@auth0/nextjs-auth0";

import useAxios from 'axios-hooks'

import Button from 'react-bootstrap/Button';

import Layout from '../../components/Layout.js'
import SentenceEditor from '../../components/SentenceEditor.js'


function Sentence() {
	
	const { user, user_error, isLoading } = useUser()

	const router = useRouter()
	const sentence_id = router.query.id
	const matching_id = router.query.matching_id
	const citations = router.query.citations

	
	
	const editor = sentence_id ? <SentenceEditor sentence_id={sentence_id} user={user} matching_id={matching_id} citations={citations}></SentenceEditor> : <></>

	
	return <Layout title="Manual Annotation" page="/manual_annotation" >
		
	 				<div>
	 					<Button size="md" className='float-right mb-3' onClick={() => router.back()}>Back to Sentences</Button>
					</div>
					
	 				<div className="card shadow mb-4 float-right">
	 					<div className="card-body">
	 						{editor}
	 					</div>
	 				</div>
	
	 			</Layout>
  }

export default Sentence;
