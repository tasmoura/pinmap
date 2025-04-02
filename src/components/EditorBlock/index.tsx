import React, { createRef, Component } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';

interface EditorBlockProps {}

interface EditorBlockState {
  content: string;
}

class EditorBlock extends Component<EditorBlockProps, EditorBlockState> {
  editorRef = createRef<HTMLDivElement>();
  quillRef = createRef<Quill | null>();
  state: EditorBlockState = {
    content: '',
  };

  componentDidMount() {
    if (typeof window !== 'undefined' && this.editorRef.current && !this.quillRef.current) {
      // Inicializar Quill apenas uma vez
      this.quillRef.current = new Quill(this.editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['link'],
          ],
        },
        placeholder: 'Digite algo aqui...',
      });

      // Configurar o evento text-change
      this.quillRef.current.on('text-change', () => {
        if (this.quillRef.current) {
          this.setState({ content: this.quillRef.current.root.innerHTML });
        }
      });
    }
  }

  componentDidUpdate(prevProps: EditorBlockProps, prevState: EditorBlockState) {
    if (this.quillRef.current && prevState.content !== this.state.content) {
      this.quillRef.current.root.innerHTML = this.state.content;
    }
  }

  render() {
    return (
      <QuillFieldST>
        <div ref={this.editorRef} />
      </QuillFieldST>
    );
  }
}

export default EditorBlock;

const QuillFieldST = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: calc(80% - 300px);
  height: 300px;
  padding-bottom: 40px;
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.gray1};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 11000;
  .ql-toolbar {
    border:none;
    border-bottom: solid 1px ${({theme}) => theme.colors.gray};
  }
  .ql-container {
    border:none;
  }
`;