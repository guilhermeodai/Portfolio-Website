Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == '.html'

  # Adiciona loading="lazy" no final da tag <img ...>, apenas se não existir
  doc.output.gsub!(/<img([^>]*)(?<!loading="lazy")>/i) do
    attrs = Regexp.last_match(1).strip
    if attrs.include?('loading=')
      "<img #{attrs}>"
    else
      "<img #{attrs} loading=\"lazy\">"
    end
  end
end