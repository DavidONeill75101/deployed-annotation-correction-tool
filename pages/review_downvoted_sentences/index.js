import React, { Component } from 'react';

import { useRouter } from 'next/router'

import Link from 'next/link'

import { useUser } from "@auth0/nextjs-auth0";

import Button from 'react-bootstrap/Button';

import DownvotedSentences from '../../components/DownvotedSentences.js'
import Layout from '../../components/Layout.js'


const ReviewDownvotedSentences = () => {

	const { user, error, isLoading } = useUser();

	const router = useRouter()
	const matchingId = router.query.id
	const range = router.query.range
	const gene = router.query.gene
	const cancer = router.query.cancer
	const drug = router.query.drug
	const evidence_type = router.query.evidence_type
	const variant = router.query.variant	


	var param_string = ''

	if (typeof gene!='undefined'){
		param_string = param_string + '&gene=' + gene
	}

	if (typeof cancer!='undefined'){
		param_string = param_string + '&cancer=' + cancer
	}

	if (typeof drug!='undefined'){
		param_string = param_string + '&drug=' + drug
	}

	if (typeof evidence_type!='undefined'){
		param_string = param_string + '&evidence_type=' + evidence_type
	}

	if (typeof variant!='undefined'){
		param_string = param_string + '&variant=' + variant
	}

	var start
	var end

	if (typeof range == "undefined"){
		start = 0
		end = 9
	}else{
		start = range.split('-')[0]
		end = range.split('-')[1]
	}

	const citations = router.query.citations

	const editor = user ?  <DownvotedSentences matching_id={matchingId} start={start} end={end} citations={citations} user={user}/> : <div><a href="/api/auth/login">Login</a> to use the tool</div>

	
	return <Layout title="Manual Annotation" page="/review" >
		
				<div className="d-sm-flex align-items-center justify-content-between mb-4 titlepadding">
					<h1 className="h3 mb-0 text-gray-800">Review Sentences</h1>
					<Link href={'/collated?range=0-9'+param_string}>
						<a><Button size="md">Back to Relations</Button></a>
					</Link>
				</div>

				<div className="card shadow mb-4">
					<div className="card-body">
						{editor}
					</div>
				</div>

			</Layout>
}

export default ReviewDownvotedSentences
