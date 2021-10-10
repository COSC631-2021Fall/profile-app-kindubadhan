import React, { Component } from 'react';
import Education from './components/education'
import Skills from './components/skills'
import Footer from './components/footer'
import Contact from './components/contact'
import { Address } from './components/contact';

export default class Home extends Component {
	render() {
		return (
			<section>
				
				<div >
                    <div >
					        <Address />
							<Education />
							<Skills />
							<Footer />
                            
						</div>
					</div>
				
			</section>
		);
	}
}