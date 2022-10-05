using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using NewsWebsite.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewsWebsite.Data.Mapping
{
    public class CategoryMapping : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(t => new { t.CategoryId });
            builder
              .HasOne(p => p.category)
              .WithMany(t => t.Categories)
              .HasForeignKey(f => f.ParentCategoryId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
