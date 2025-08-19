import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const baseFields = {
  slug: { type: 'string', required: true },
  title_nl: { type: 'string', required: true },
  title_en: { type: 'string', required: true },
  summary_nl: { type: 'string', required: true },
  summary_en: { type: 'string', required: true },
  dates: { type: 'json', required: false },
  tags: { type: 'list', of: { type: 'string' } },
  related_ids: { type: 'list', of: { type: 'string' } },
  source_ids: { type: 'list', of: { type: 'string' } },
  image: { type: 'string', required: false },
  image_credit: { type: 'string', required: false },
  reading_time: { type: 'number', required: false },
  difficulty: { type: 'number', required: false },
  updated: { type: 'date', required: false }
};

const Period = defineDocumentType(() => ({
  name: 'Period',
  filePathPattern: `periods/*.md`,
  contentType: 'mdx',
  fields: baseFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Period]
});
