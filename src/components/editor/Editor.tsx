import '../../utils/highlight';
import ReactQuill from 'react-quill';
//
import { StyledEditor } from './styles';
import EditorToolbar, { formats } from './EditorToolbar';

// ----------------------------------------------------------------------

type EditorProps = {
  id: string,
  sx: object,
  error: boolean,
  simple: boolean,
  value: string,
  onChange: (content: string, delta: any, source: any, editor: any) => void,
  helperText?: React.ReactNode,
};

export default function Editor({
  id = 'minimal-quill',
  error,
  value,
  onChange,
  simple = false,
  helperText,
  sx,
  ...other
}: EditorProps ) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <StyledEditor
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
          }),
          ...sx,
        }}
      >
        <EditorToolbar id={id} isSimple={simple} />

        <ReactQuill
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder="Write something awesome..."
          {...other}
        />
      </StyledEditor>

      {helperText && helperText}
    </>
  );
}
