import React, { useState } from 'react';
import styled from 'styled-components'
import "./news.css"
import { Link } from 'react-router-dom'

const News = () => {
    const getdata = [
        {
            "title": "The New York Times is building a team to explore AI in the newsroom",
            "url": "https://www.theverge.com/2024/1/30/24055718/new-york-times-generative-ai-machine-learning",
            "thumbnail": "https://cdn.vox-cdn.com/thumbor/fsHllJqT7J4N5U_qAYK3oqBYl24=/0x0:1020x676/1200x628/filters:focal(510x338:511x339)/cdn.vox-cdn.com/assets/964860/nytimes-logo-headquarters-stock_1020.jpg"
        },
        {
            "title": "Toyota's Robots Are Learning to Do Housework\u2014By Copying Humans",
            "url": "https://www.wired.com/story/fast-forward-toyota-robots-learning-housework/",
            "thumbnail": "https://media.wired.com/photos/659f34a16dba2e6219488945/191:100/w_1280,c_limit/Will-Sweep-Toyota-Robot-Top-Art-Business.jpg"
        },
        {
            "title": "Staying One Step Ahead of Hackers When It Comes to AI",
            "url": "https://www.wired.com/story/staying-one-step-ahead-of-hackers-when-it-comes-to-ai/",
            "thumbnail": "https://media.wired.com/photos/65989cb9c256c0f1447f298c/191:100/w_1280,c_limit/WW2024_1423783201_SECURITY_Scott-Shapiro.jpg"
        },
        {
            "title": "The AI explosion has made machine learning jobs hot commodities. But do you really need a Ph.D. to get one?",
            "url": "https://www.businessinsider.com/ai-booming-is-phd-necessary-machine-learning-jobs-workers-2024-1",
            "thumbnail": "https://i.insider.com/65b18601617029e90a602dee?width=1200&format=jpeg"
        },
        {
            "title": "A Flaw in Millions of Apple, AMD, and Qualcomm GPUs Could Expose AI Data",
            "url": "https://www.wired.com/story/leftoverlocals-gpu-vulnerability-generative-ai/",
            "thumbnail": "https://media.wired.com/photos/65a1549c81f92dbe563bcabb/191:100/w_1280,c_limit/AI-chip-flaw-GettyImages-85757121-(1).jpg"
        }
    ]
    const VideoData = [
        {
            "video_id": "9gGnTQTYNaE",
            "video_title": "What is Machine Learning?",
            "published_at": "2021-07-14T14:07:15Z",
            "thumbnail_url": "https://i.ytimg.com/vi/9gGnTQTYNaE/default.jpg",
            "Total comments": 30,
            "Positive comments": 66.66666666666666,
            "Neutral comments": 26.666666666666668,
            "Negative comments": 6.666666666666667
        },
        {
            "video_id": "4RixMPF4xis",
            "video_title": "AI vs Machine Learning",
            "published_at": "2023-04-10T11:00:03Z",
            "thumbnail_url": "https://i.ytimg.com/vi/4RixMPF4xis/default.jpg",
            "Total comments": 341,
            "Positive comments": 58.94428152492669,
            "Neutral comments": 33.43108504398827,
            "Negative comments": 7.624633431085044
        },
        {
            "video_id": "ukzFI9rgwfU",
            "video_title": "Machine Learning | What Is Machine Learning? | Introduction To Machine Learning | 2021 | Simplilearn",
            "published_at": "2018-09-19T14:57:02Z",
            "thumbnail_url": "https://i.ytimg.com/vi/ukzFI9rgwfU/default.jpg",
            "Total comments": 732,
            "Positive comments": 56.4207650273224,
            "Neutral comments": 37.56830601092896,
            "Negative comments": 6.0109289617486334
        },
        {
            "video_id": "PeMlggyqz0Y",
            "video_title": "Machine Learning Explained in 100 Seconds",
            "published_at": "2021-09-09T17:31:56Z",
            "thumbnail_url": "https://i.ytimg.com/vi/PeMlggyqz0Y/default.jpg",
            "Total comments": 356,
            "Positive comments": 53.93258426966292,
            "Neutral comments": 39.8876404494382,
            "Negative comments": 6.179775280898876
        },
        {
            "video_id": "i_LwzRVP7bg",
            "video_title": "Machine Learning for Everybody \u2013 Full Course",
            "published_at": "2022-09-26T16:00:28Z",
            "thumbnail_url": "https://i.ytimg.com/vi/i_LwzRVP7bg/default.jpg",
            "Total comments": 696,
            "Positive comments": 53.01724137931034,
            "Neutral comments": 36.49425287356322,
            "Negative comments": 10.488505747126437
        },
        {
            "video_id": "JxgmHe2NyeY",
            "video_title": "Complete Machine Learning In 6 Hours| Krish Naik",
            "published_at": "2022-05-28T04:37:31Z",
            "thumbnail_url": "https://i.ytimg.com/vi/JxgmHe2NyeY/default.jpg",
            "Total comments": 230,
            "Positive comments": 52.17391304347826,
            "Neutral comments": 41.30434782608695,
            "Negative comments": 6.521739130434782
        },
        {
            "video_id": "C6YtPJxNULA",
            "video_title": "All About Machine Learning & Deep Learning in 2024 \ud83d\udd25",
            "published_at": "2023-12-01T13:30:07Z",
            "thumbnail_url": "https://i.ytimg.com/vi/C6YtPJxNULA/default.jpg",
            "Total comments": 515,
            "Positive comments": 52.038834951456316,
            "Neutral comments": 45.63106796116505,
            "Negative comments": 2.3300970873786406
        },
        {
            "video_id": "Rn9OmxLDdXM",
            "video_title": "What is Machine Learning?",
            "published_at": "2022-09-01T12:49:02Z",
            "thumbnail_url": "https://i.ytimg.com/vi/Rn9OmxLDdXM/default.jpg",
            "Total comments": 29,
            "Positive comments": 48.275862068965516,
            "Neutral comments": 41.37931034482759,
            "Negative comments": 10.344827586206897
        }
    ]

    console.log(VideoData);


    const [messages, setMessages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.elements.message.value;
        setMessages([...messages, { text: message, sender: 'user' }]);
        // TODO: Add your chatbot response logic here
        setMessages([...messages, { text: 'Chatbot response', sender: 'bot' }]);
    };

    return (
        <Container>
            <GPTtext>
                <div className="head">Machine Learning Chatbot</div>
                <div className="chatbot-messages">
                {
                    VideoData.map((iteam, index) => (
                        <div className="news">
                            <img src={iteam.thumbnail_url} alt="cant" className='img' />
                            <div className='link'>
                                    <h4>
                                        {iteam.video_title}
                                    </h4>
                            </div>
                        </div>
                    ))
                }
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="message" />
                    <button type="submit">Send</button>
                </form>
            </GPTtext>
            <NewsParent>
                <div className="head">AI News</div>
                {
                    getdata.map((iteam, index) => (
                        <div className="news">
                            <img src={iteam.thumbnail} alt="cant" className='img' />
                            <div className='link'>
                                <Link to={iteam.url}>
                                    <h4>
                                        {iteam.title}
                                    </h4>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </NewsParent>
        </Container>
    )
}

const NewsParent = styled.div`
    width:20vw;
    height: 75vh;
    border-radius: 50px;
    background: #ffb19e;
    box-shadow:  20px -20px 60px #d99686,-2px 2px 6px #ffccb6;
    
    a{
        text-decoration: none;
        color: inherit;
    }
    .img{
        width: 75px;
        border-radius: 50%;
        object-fit: cover;
        height: 75px;
    }

    .head{
        height: auto;
        padding: 1rem;
        background-color: #b04a31;
        border-radius: 50px 50px 0 0;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
    }
    .news{
        display: flex;
        flex-direction: row-reverse;
        margin: 15px;
        border-bottom: 2px solid black;
        padding: 5px;
        img{
            width: 80px;
            border-radius: 50%;
            object-fit: cover;
        };
        
    }
`

const GPTtext = styled.div`
    width:40vw;
    height: 75vh;
    margin: 0 1rem 0 0;
    border-radius: 50px;
    background: #ffb19e;
    box-shadow:  20px -20px 60px #d99686,-20px 20px 60px #ffccb6;
    overflow: hidden;
    .head{
        height: auto;
        padding: 1rem;
        background-color: #b04a31;
        border-radius: 50px 50px 0 0;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
    }
    .GPT{
        margin: 1rem;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .img{
        width: 75px;
        border-radius: 50%;
        object-fit: cover;
        height: 75px;
    }

    .head{
        height: auto;
        padding: 1rem;
        background-color: #b04a31;
        border-radius: 50px 50px 0 0;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
    }
    .news{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
                margin: 15px;
        border-bottom: 2px solid black;
        padding: 5px;
        img{
            width: 80px;
            border-radius: 50%;
            object-fit: cover;
        };
        
    }
`

const Container = styled.div`
display: flex;
`

const link = styled.div`
    text-decoration: none;
`

export default News;
