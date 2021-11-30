import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _historial: string[] = [];
    private apiKey: string = 'Soca8TE6nv54lsyOm1tSjitOuaJ4HTwc';

    // TODO: Cambiar any por el tipo correspondiente
    public resultados: Gif[] = [];

    get historial() {
        return [...this._historial];
    }

    constructor(private http: HttpClient) {
            this._historial = JSON.parse(localStorage.getItem("historial")!)||[]
        
    }

    buscarGifs(query: string) {
        query = query.trim().toLocaleLowerCase();
        if (!this._historial.includes(query)) {
            this._historial.unshift(query);
            this._historial = this._historial.splice(0, 9);

            localStorage.setItem("historial", JSON.stringify(this._historial))
        }
        this.http
            .get<SearchGifsResponse>(
                `https://api.giphy.com/v1/gifs/search?api_key=Soca8TE6nv54lsyOm1tSjitOuaJ4HTwc&q=${query}&limit=10`
            )
            .subscribe((resp: SearchGifsResponse) => {
                console.log(resp.data);
                this.resultados = resp.data;
            });
    }
}
