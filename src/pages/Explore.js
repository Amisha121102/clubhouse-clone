import React from 'react'
import style from "../style/explore.module.css"
import {Input} from "antd"
import { DownOutlined, FireOutlined } from "@ant-design/icons"
import data from "../data/Explore.json"
import SubHeader from '../components/SubHeader'

const Explore = () => {
    const { people, conversation } = data;
    return (
        <div className={style.exploreContainer}>
            <div className={style.header}>
                <SubHeader pageTitle="EXPLORE" />
                <Input style={{
                    backgroundColor:"f4f4f4",
                    borderRadius:"0.8em",
                    padding:"0.3em 1em",
                    border:"none",
                    boxShadow:"none",
                }}
                size="large"
                placeholder="Find People and Clubs"
                prefix={<img src="images/search.png" alt="" width="15px"/>}
                >
                </Input>
            </div>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer}>
                {people.map((item) => (
                    <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/user-img.jpg" alt="" />
                            <div className="ml-2">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                        
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined />
                </button>
                {/* <h2>DUMMY TEXT</h2> */}
            </div>
            <h6>FIND CONVERSATIONS ABOUT ...</h6>
                        <div className="row max-0">
                            {conversation.map((item)=>(
                                <div className="col-6 px-2 mb-3">
                                    <div className={style.conversationCard}>
                                        <h6>
                                            <FireOutlined />
                                            {item.title}
                                        </h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
        </div>
    )
}

export default Explore