import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorizeWords',
  standalone: true
})
export class ColorizeWordsPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    const words: string[] | null = value.match(/\b[a-zA-Z]{3}\d{3}(?!\S)\b/g);
    console.log(words);
    const colorizedWords = words?.map(word => {
      //<font color=\"blue\">CAVOK</font>
      let colorizedWord = "";
      console.log(word.match(/\d+/g));
      if (Number(word.match(/\d+/g)) <= 30) {
        console.log('blue');
        colorizedWord = `<font color=\"blue\">${word}</font>`
      }

      if (Number(word.match(/\d+/g)) > 30) {
        console.log('red');
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
