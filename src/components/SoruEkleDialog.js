import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Input} from '@mui/material';
import React, {Component} from 'react';

import {useState} from "react";

const SoruEkleDialog = () => {

    const [openSoruTipiSec, setOpenSoruTipiSec] = useState(false);
    const [openCoktanSecmeliSoruEkle, setOpenCoktanSecmeliSoruEkle] = useState(false);
    const  [openAcikUcluSoruEkle, setOpenAcikUcluSoruEkle] = useState(false);
    const [sorular, setSorular] = useState([]);
    console.log(sorular);
    return (
        <>
            <Button className="soru-ekle" onClick={
                () => setOpenSoruTipiSec(true)
            }>
                Soru Ekle
            </Button>
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
                    <Button autoFocus onClick={ () => {
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
                    <Button onClick= {() =>
                    {setOpenSoruTipiSec(false);}
                    }>
                        Vazgeç
                    </Button>
                </DialogActions>
            </Dialog>
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
                        <Input id='soru-context' placeholder='Soru metnini girin:'/>
                        <Input placeholder='A şıkkını girin:'/>
                        <Input placeholder='B şıkkını girin:'/>
                        <Input placeholder='C şıkkını girin:'/>
                        <Input placeholder='D şıkkını girin:'/>
                        <Input placeholder='E şıkkını girin:'/>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        setSorular(...sorular, document.getElementById('soru-context').value);
                        setOpenCoktanSecmeliSoruEkle(false);
                    }}>
                        Kaydet
                    </Button>
                    <Button onClick={() => setOpenCoktanSecmeliSoruEkle(false)}>
                        Vazgeç
                    </Button>
                </DialogActions>
            </Dialog>
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
                    <Button onClick={() => setOpenAcikUcluSoruEkle(false)}>
                        Vazgeç
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default SoruEkleDialog;