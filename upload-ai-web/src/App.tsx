import { Button } from './components/ui/button'
import { Label } from './components/ui/label'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from './components/ui/select'
import { Separator } from './components/ui/separator'
import { Slider } from './components/ui/slider'
import { Textarea } from './components/ui/textarea'
import './index.css'

import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'

export function App() {
  return (
    <div className="container">
      <div className="min-h-screen flex flex-col">
        <div className="px-6 py-3 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">upLoad.ai</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Sua assistente virtual
            </span>

            <Separator orientation="vertical" className="h-6" />

            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
          </div>
        </div>

        <main className="flex-1 p-6 flex gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                className="resize-none p-4 leading-relaxed"
                placeholder="Inclua o prompt para a IA..."
              />
              <Textarea
                className="resize-none p-4 leading-relaxed"
                placeholder="Resultado gerado"
                readOnly
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Lembre-se: você pode utilizar a variável{' '}
              <code className="text-violet-400">{'{transcription}'}</code> no
              seu prompt para adicionar o conteúdo da descrição do vídeo
              selecionado
            </p>
          </div>

          <aside className="w-80 space-y-6">
            <form className="space-y-6">
              <label
                htmlFor="video"
                className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
              >
                <FileVideo className="w-4 h-4" />
                Selecione um vídeo
              </label>
              <input
                type="file"
                id="video"
                accept="video/mp4"
                className="sr-only"
              />
              <Separator />

              <div className="space-y-2">
                <Label htmlFor="transcription_prompt">
                  Prompt de Transcrição
                </Label>
                <Textarea
                  id="transcription_prompt"
                  className="h-20 resize-none leading-relaxed"
                  placeholder="Inclua as palavras chaves do vídeo separadas por vírgula"
                />
              </div>

              <Button type="submit" className="w-full">
                Carregar vídeo <Upload className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <Separator />

            <form className="space-y-6">
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Título do Youtube</SelectItem>
                    <SelectItem value="description">
                      Descrição do Youtube
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Modelo</Label>
                <Select defaultValue="gpt3.5" disabled>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-sm text-muted-foreground italic">
                  Versão beta
                </span>
              </div>
              <Separator />
              <div className="space-y-4">
                <Label>Temperatura</Label>
                <Slider min={0} max={1} step={0.1} />
                <span className="block text-sm text-muted-foreground italic leading-relaxed">
                  Valores mais quente tedem a deixar o resultado mais criativo.
                </span>
              </div>
              <Separator />
              <Button className="w-full">
                Executar
                <Wand2 className="w-4 h-4 m-2" />
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </div>
  )
}
