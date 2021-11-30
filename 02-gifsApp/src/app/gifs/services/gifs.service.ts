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

    constructor(private http: HttpClient) {}

    buscarGifs(query: string) {
        query = query.trim().toLocaleLowerCase();
        if (!this._historial.includes(query)) {
            this._historial.unshift(query);
            this._historial = this._historial.splice(0, 9);
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
