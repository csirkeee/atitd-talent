import { Component } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-import-export-panel',
  templateUrl: './import-export-panel.component.html',
  styleUrls: ['./import-export-panel.component.scss']
})
export class ImportExportPanelComponent {
  constructor(public playerDataService: PlayerDataService) { }

  public exportBuild() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.playerDataService.getPlayerDataState())));
    element.setAttribute('download', 'atitd-talent-build.json');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  public async importBuild(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      const reader = new FileReader()
      const contents = await new Promise<string | ArrayBuffer>((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(fileList[0])
      })
      if(typeof(contents) === 'string') {
        const playerData = JSON.parse(contents);
        this.playerDataService.setPlayerDataState(playerData);
      }
      element.value = '';
    }
  }

}
