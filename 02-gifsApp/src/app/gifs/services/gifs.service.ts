import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _historial: string[] = [];
    private apiKey: string = 'Soca8TE6nv54lsyOm1tSjitOuaJ4HTwc';

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
            .get('https://api.giphy.com/v1/gifs/search?api_key=Soca8TE6nv54lsyOm1tSjitOuaJ4HTwc&q=dragon ball z&limit=10')
            .subscribe((resp: any) => {
                console.log(resp.data);
            });
    }
}
