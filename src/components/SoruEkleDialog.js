import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Input} from '@mui/material';
import React from 'react';

import {useState} from "react";

const SoruEkleDialog = () => {

    const [openSoruTipiSec, setOpenSoruTipiSec] = useState(false);
    const [openCoktanSecmeliSoruEkle, setOpenCoktanSecmeliSoruEkle] = useState(false);
    const [openAcikUcluSoruEkle, setOpenAcikUcluSoruEkle] = useState(false);
    const [sorular, setSorular] = useState([]);
    const [soru, setSoru] = useState([{soruMetni: "", siklar: [] }]);
    const [siklar, setSiklar] = useState([{id: 0, data: ""}]);

    const handleSikChange = (event, index) => {
        let values = [...siklar];
        values[index][event.target.name] = event.target.value;
        setSiklar(values);
    }

    const submit = () => {
        console.log(siklar);
    }

    const addSik = () => {
        let tempData = {
            id: siklar.length,
            data: ""
        }
        setSiklar([...siklar, tempData]);
    }
    console.log(sorular)
    return (<>
        <Button className="soru-ekle" onClick={() => setOpenSoruTipiSec(true)}>
            Soru Ekle
        </Button>
        <div>
            {/*sorular listesini div içine yazdır*/}
            {sorular.map((soru, index) => {
                return <div key={index}>
                    <p>{soru.soruMetni}</p>
                    {soru.siklar.map((sik, index) => {
                        return <p key={index}>{sik}</p>
                    })}
                </div>
            }
            )}
        </div>
        <Dialog
            component="span"
            aria-labelledby='aria-labelledby'
            aria-describedby='dialogdescription'
            open={openSoruTipiSec}
            onClose={() => setOpenSoruTipiSec(false)}
        >
            <DialogTitle id='dialog-title'>
                Soru tipi seçin...
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>
                    Açık uçlu veya çoktan seçmeli soru tipini belirleyin.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => {
                    setOpenSoruTipiSec(false);
                    setOpenAcikUcluSoruEkle(true);
                }}>
                    Açık Uçlu
                </Button>
                <Button onClick={() => {
                    setOpenSoruTipiSec(false);
                    setOpenCoktanSecmeliSoruEkle(true);
                }}>
                    Çoktan Seçmeli
                </Button>
                <Button onClick={() => {
                    setOpenSoruTipiSec(false);
                }}>
                    Vazgeç
                </Button>
            </DialogActions>
        </Dialog>
        <form onSubmit={submit}>
            <Dialog
                component='span'
                aria-labelledby='aria-labelledby'
                aria-describedby='dialogdescription'
                open={openCoktanSecmeliSoruEkle}
                onClose={() => setOpenCoktanSecmeliSoruEkle(false)}>
                <DialogTitle id='dialog-title'>
                    Çoktan Seçmeli Soru Ekle
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='coktan-secmeli-dialog-content'>

                        <Input id='soru-metin' placeholder='Soru metnini girin:'/>

                        {siklar.map((sik, index) => {
                            return (
                                <Input type='text'
                                       name='sik'
                                       onChange={event => handleSikChange(event, index)} id='sik'
                                       placeholder='Şık Giriniz'/>
                            )
                        })}

                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        setSoru(soru.concat({soruMetni: document.getElementById('soru-metin').value, siklar: siklar}));
                        setOpenCoktanSecmeliSoruEkle(false);
                        setSorular(sorular.concat(soru));
                        console.log(sorular);
                    }}>
                        Kaydet
                    </Button>
                    <Button onClick={addSik}>
                        Şık Ekle
                    </Button>
                    <Button onClick={() => setOpenCoktanSecmeliSoruEkle(false)}>
                        Vazgeç
                    </Button>

                </DialogActions>
            </Dialog>
        </form>
        <Dialog
            component='span'
            aria-labelledby='aria-labelledby'
            aria-describedby='dialogdescription'
            open={openAcikUcluSoruEkle}
            onClose={() => setOpenAcikUcluSoruEkle(false)}>
            <DialogTitle id='dialog-title'>
                Açık Uçlu Soru Ekle
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='coktan-secmeli-dialog-content'>
                    <Input id='soru-context' placeholder='Soru metnini girin:'/>
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => {
                    setSorular(...sorular, document.getElementById('soru-context').value);
                    setOpenAcikUcluSoruEkle(false);
                }}>
                    Kaydet
                </Button>
                <Button onClick={() => {
                    setOpenAcikUcluSoruEkle(false);
                    setOpenSoruTipiSec(true);
                }}>
                    Vazgeç
                </Button>
            </DialogActions>
        </Dialog>

    </>)
}

export default SoruEkleDialog;