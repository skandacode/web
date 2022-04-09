from PIL import Image as image
image=image.open(input())
from PIL import Image
width, height = image.size
def convertImage(picimg):
    global width
    img = picimg.convert("RGBA")
  
    datas = img.getdata()
  
    positions = []
    for item in range(len(datas)):
        if datas[item]==(0, 0, 0, 255):
            positions.append([(item%width)*50, int(item/width)*50])
    return positions  
print(convertImage(image))
