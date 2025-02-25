import { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import axios from "axios";

const About = () => {
    const [text, setText] = useState();
    const [message, setMessage] = useState("Api'a istek atılıyor...");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const fetchData = async () => {
        try {
            const response = await axios("http://localhost:4000/");
            setMessage(response.data.message);
        }
        catch (error) {
            setMessage("İstek başarısız oldu.")
        }
    }

    useEffect(() => {
        fetchData();
    }, [text]);

    return (
        <div>
            <Button
                label={"Home Sayfasına Dön"}
                href={"/"}
            />
            <h1>
                About Sayfası
            </h1>
            <Button color={"black"} label={"Test butonu"} size={50}/>
            <Input
                value={text}
                placeholder={"Bir şeyler yazın..."}
                onChange={handleChange}
            />
            <p>
                Yazılan metin: {text}
            </p>
            <p>
                API'den gelen cevap: {message}
            </p>
        </div>
    );
};

export default About;
