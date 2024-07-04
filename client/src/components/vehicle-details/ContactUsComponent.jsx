import React from 'react';
import { Form, Input, Button, message } from 'antd';
import '../../styles/vehicle-details/contact-us.css';

const ContactUsComponent = ({ vehicleData }) => {
    const onFinish = async (values) => {
        const combinedData = { ...values, vehicle: vehicleData };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzBdSGtl7KFItjcd_ZZFkop4tiSTC8HmVmJcICoYE963zOt9OmslyqI8xVtxfu9R_Yn/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(combinedData),
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const result = await response.json();
            if (result.status === 'success') {
                message.success('Message sent successfully!');
            } else {
                message.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            message.error('An error occurred. Please try again.');
        }
        
    };


    return (
        <div className="contact-us-content">
            <h3>Contact Us</h3>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                    <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item label="Mobile Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                    <Input placeholder="Your Phone Number" />
                </Form.Item>
                <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                    <Input.TextArea placeholder={`I am interested in buying the ${vehicleData?.name || 'vehicle'}`} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactUsComponent;
