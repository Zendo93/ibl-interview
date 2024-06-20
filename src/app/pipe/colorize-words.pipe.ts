import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorizeWords',
  standalone: true
})
export class ColorizeWordsPipe implements PipeTransform {

  transform(value: string): string {
    const words: string[] | null = value.match(/\b[a-zA-Z]{3}\d{3}(?!\S)\b/g);
    const colorizedWords = words?.map(word => {
      let colorizedWord = "";
      if (Number(word.match(/\d+/g)) <= 30) {
        colorizedWord = `<font color=\"blue\">${word}</font>`
      }

      if (Number(word.match(/\d+/g)) > 30) {
        colorizedWord = `<font color=\"red\">${word}</font>`
      }

      return colorizedWord;
    });
    colorizedWords?.forEach((colorizedWord, index) =>{
      if (words) value = value.replace(words[index], colorizedWord)
    });
    return value;
  }

}
