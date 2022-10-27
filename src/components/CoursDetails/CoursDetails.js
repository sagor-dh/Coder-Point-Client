import React, { useRef } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './CoursDetails.css'

function CoursDetails() {
    const cours = useLoaderData()
    const printRef = useRef()

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };

    return (
        <div className='container'>
            <Card className='card_details'>
                <div className='card_bg rounded-2'>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        <Card.Title className="fs-3 fw-blod">{cours.name}</Card.Title>
                        <Button variant="primary" onClick={handleDownloadPdf}>Download PDF</Button>
                    </Card.Header>
                    <Card.Img className='card_details_img' variant="top" src={cours.img} />
                    <Card.Body>
                        <div ref={printRef}>
                            <Card.Text>{cours.detalis}</Card.Text>
                            <Card.Text className='mb-0 mt-4'><b>Duration:</b> <small>{cours.duration}</small></Card.Text>
                            <Card.Text><b>Price:</b> <small>${cours.price}</small></Card.Text>
                        </div>
                        <Button variant="outline-dark" className='mt-4 premearBtn'> <NavLink className='text-black text-decoration-none ' to='/premearAccess'>Get premium access</NavLink> </Button>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default CoursDetails