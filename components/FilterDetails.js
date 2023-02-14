import React, { Component } from 'react';

import Link from 'next/link'

import axios from 'axios';

import Select from 'react-select'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

import entity_data from '../public/entities.json'

export default class Relations extends Component {

	constructor(props) {
		super(props)
		this.state = {
			genes: [],
			cancers: [],
			drugs: [],
			evidenceTypes: [],
			variants: [],
			gene: this.props.gene,
			cancer: this.props.cancer,
			drug: this.props.drug,
			evidenceType: this.props.evidence_type,
			variant:this.props.variant,
						
		}
		
		this.getGenes = this.getGenes.bind(this);
		this.getCancers = this.getCancers.bind(this);
		this.getDrugs = this.getDrugs.bind(this);
		this.getEvidenceTypes = this.getEvidenceTypes.bind(this);
		this.getVariants = this.getVariants.bind(this);
		
		
		this.handleOnGeneSelect = this.handleOnGeneSelect.bind(this);
		this.handleOnCancerSelect = this.handleOnCancerSelect.bind(this);
		this.handleOnDrugSelect = this.handleOnDrugSelect.bind(this);
		this.formatResult = this.formatResult.bind(this);
	}


	getGenes() {
		var res = entity_data['genes']
		var genes = []
		res.forEach(function (value, i) {
			genes.push({'id':i, 'name':value})
		})		
		
		this.setState({
			genes: genes,
		})
		/*var self = this
		
		axios.get('/api/get_data/get_genes')
			.then(function (response) {
				const res = response.data
				var genes = []
				res.forEach(function (value, i) {
					genes.push({'id':i, 'name':value})	
				}	)
				
				self.setState({
					genes: genes,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
				self.getCancers()
			});*/

	}


	getCancers() {
		var res = entity_data['cancers']
		var cancers = []
		res.forEach(function (value, i) {
			cancers.push({'id':i, 'name':value})
		})		
		
		this.setState({
			cancers: cancers,
		})
		/*var self = this
		
		axios.get('/api/get_data/get_cancers')
			.then(function (response) {
				const res = response.data
				var cancers = []
				res.forEach(function (value, i) {
					cancers.push({'id':i, 'name':value})	
				}	)
				
				self.setState({
					cancers: cancers,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
				self.getDrugs()
			});*/
	}


	getDrugs() {
		var res = entity_data['drugs']
		var drugs = []
		res.forEach(function (value, i) {
			drugs.push({'id':i, 'name':value})
		})		
		
		this.setState({
			drugs: drugs,
		})

		/*var self = this
		
		axios.get('/api/get_data/get_drugs')
			.then(function (response) {
				const res = response.data
				var drugs = []
				res.forEach(function (value, i) {
					drugs.push({'id':i, 'name':value})	
				}	)
				
				self.setState({
					drugs: drugs,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
				self.getEvidenceTypes()
			});*/
	}


	getEvidenceTypes() {
		var res = entity_data['evidence_types']
		var evidence_types = []
		res.forEach(element => {
			evidence_types.push({'value':element, 'label':element})
		});		
		
		this.setState({
			evidenceTypes: evidence_types,
		})

		/*var self = this
		
		axios.get('/api/get_data/get_evidence_types')
			.then(function (response) {
				const res = response.data
				var evidenceTypes = []
				res.forEach(element => {
					evidenceTypes.push({'value':element, 'label':element})
				});
				self.setState({
					evidenceTypes: evidenceTypes,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
				self.getVariants()
			});*/
	}


	getVariants() {
		var res = entity_data['variants']
		var variants = []
		res.forEach(element => {
			variants.push({'value':element, 'label':element})
		});		
		
		this.setState({
			variants: variants,
		})
		/*var self = this
		
		axios.get('/api/get_data/get_variants')
			.then(function (response) {
				const res = response.data
				var variants = []
				res.forEach(element => {
					variants.push({'value':element, 'label':element})
				});				
				self.setState({
					variants: variants,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				// always executed
			});*/
	}


	componentDidMount() {
		this.getGenes()
		this.getCancers()
		this.getDrugs()
		this.getEvidenceTypes()
		this.getVariants()		
	}

	
	handleEvidenceTypeClick(e){
		this.setState({evidenceType:e.label})
	}


	handleVariantClick(e){
		this.setState({variant:e.label})
	}


	handleOnGeneSelect(item){
		// the item selected
		this.setState({gene:item.name})
	}


	handleOnCancerSelect(item){
		// the item selected
		this.setState({cancer:item.name})
	}


	handleOnDrugSelect(item){
		// the item selected
		this.setState({drug:item.name})
	}


	formatResult(item){
		return (
		<>
			<span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
		</>
		)
	}


	render() {

		var param_string = ''
		var filters = ''

		if (typeof this.state.gene!='undefined'){
			param_string = param_string + '&gene=' + this.state.gene
			filters = filters + 'Gene: ' + this.state.gene + '\t|\t'
			
		}

		if (typeof this.state.cancer!='undefined'){
			param_string = param_string + '&cancer=' + this.state.cancer
			filters = filters + 'Cancer: ' + this.state.cancer + '\t|\t'
			
		}

		if (typeof this.state.drug!='undefined'){
			param_string = param_string + '&drug=' + this.state.drug
			filters = filters + 'Drug: ' + this.state.drug + '\t|\t'
			
		}

		if (typeof this.state.evidenceType!='undefined'){
			param_string = param_string + '&evidence_type=' + this.state.evidenceType
			filters = filters + 'Evidence Type: ' + this.state.evidenceType + '\t|\t'
			
		}

		if (typeof this.state.variant!='undefined'){
			param_string = param_string + '&variant=' + this.state.variant
			filters = filters + 'Variant: ' + this.state.variant + '\t|\t'
			
		}


		return (
				<div>

					 

					<Container>
						
						<Row>
							<Col>Gene</Col>
							<Col>Cancer</Col>
							<Col>Drug</Col>
							<Col>Evidence Type</Col>
							<Col>Variant</Col>
						</Row>
						
						<Row>

							<Col>
								<ReactSearchAutocomplete
										items={this.state.genes}
										onSelect={this.handleOnGeneSelect}
										placeholder={"Search..."}
										formatResult={this.formatResult}
										showIcon={false}
										styling={
											{
											borderRadius: "5px",
											height: "37px",
											color: "#999999",
											zIndex: 1,
											}
										}
									/>						
							</Col>

							<Col>
								<ReactSearchAutocomplete
									items={this.state.cancers}
									onSelect={this.handleOnCancerSelect}
									placeholder={"Search..."}
									formatResult={this.formatResult}
									showIcon={false}
									styling={
										{
										borderRadius: "5px",
										height: "37px",
										color: "#999999",
										zIndex: 1,									
										}
									}
								/>
							</Col>

							<Col>
								<ReactSearchAutocomplete
									items={this.state.drugs}
									onSelect={this.handleOnDrugSelect}
									placeholder={"Search..."}
									formatResult={this.formatResult}
									showIcon={false}
									styling={
										{
										borderRadius: "5px",
										height: "37px",
										color: "#999999",
										zIndex: 1,
										}
									}
								/>
							</Col>

							<Col><Select options={this.state.evidenceTypes} onChange={this.handleEvidenceTypeClick.bind(this)}/></Col>

							<Col><Select options={this.state.variants} onChange={this.handleVariantClick.bind(this)}/></Col>

						</Row>

						<br></br>

						<Row>
							<Col><Link href={"/collated?range=0-9" + param_string}><a><Button className="mb-3" size="md">Apply filters</Button></a></Link></Col>
						</Row>

						<Row>
							<Col>{filters}</Col>
						</Row>

						<Row>
							<Col><Link href={"/collated?range=0-9"}><a><Button className="mt-3" size="md">Remove Filters</Button></a></Link></Col>
						</Row>

					</Container>

					
				</div>
		)
	}
}
