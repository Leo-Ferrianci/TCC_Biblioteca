import React, { useState } from 'react';
import {
    Card
} from 'reactstrap';

import './styles.css'

export default function Sidebar() {
    return (
        <>
            <Card
                className="align-items-center mb-5"
                style={{
                    backgroundColor: '#dddddd',
                    width: '100%', height: '100%',
                    borderRadius: 0
                }}
            >
                {/* Dropdown-1 */}
                


                <button className="button">
                    danger
                </button>

                <button className="button">
                    danger
                </button>

                <button className="button">
                    danger
                </button>

                <button className="button">
                    danger
                </button>

                <button className="button">
                    danger
                </button>
                

            </Card>
        </>
    )
}
