Vim�UnDo� X2�����+���CG��K�݆�#��l���{   �           	      ,       ,   ,   ,    e#�r    _�                     �        ����                                                                                                                                                                                                                                                                                                                                                             e#��     �   �   �              console.log(   X      "🚀 ~ file: outputEndpoint.js:146 ~ handlePatchOutputAndCreateContent ~ error:",         error       );5��    �                      �      }               5�_�                    �   9    ����                                                                                                                                                                                                                                                                                                                                                             e#��     �   �   �   �      ?const handlePatchOutputAndCreateContent = async (req, res) => {5��    �   9                  3                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          v       e#��     �   �   �   �      B    const result = await OutputService.createContentForOutput(id);5��    �                     i                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �   %       v   %    e#��     �   �   �   �      (    return res.json({ output: result });5��    �                     �                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �   %       v   %    e#��     �   �   �   �          return res.json();5��    �                     �                     �    �                    �                    5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �   
       v   
    e#��     �   �   �   �      4     await OutputService.createContentForOutput(id);5��    �                     j                     5�_�                    �   .    ����                                                                                                                                                                                                                                                                                                                            �          �   
       v   
    e#��     �   �   �   �              con�   �   �   �    �   �   �   �      .     OutputService.createContentForOutput(id);5��    �   -                  �                     �    �   -                 �                     �    �                     �                    �    �                    �                     �    �                  ?   �             ?       5�_�      	              �   ?    ����                                                                                                                                                                                                                                                                                                                            �          �   
       v   
    e#��    �   �   �   �      ?        console.log("Successfully created content for output");5��    �   ?                 �              	       �    �                     �                     �    �                     �                    �    �                     �                     5�_�      
           	   �       ����                                                                                                                                                                                                                                                                                                                            �          �   
       v   
    e#��     �   �   �       	       let statusCode = 500;       let errorResponse = {   &      message: "Something went wrong",       };   )    if (error instanceof NotFoundError) {         statusCode = 404;   ,      errorResponse.message = error.message;       }   =    return res.status(statusCode).send({ ...errorResponse });5��    �       	                                   5�_�   	              
   �       ����                                                                                                                                                                                                                                                                                                                            �          �   
       v   
    e#��    �   �   �   �        } catch (error) {5��    �                                         �    �                                         5�_�   
                 �       ����                                                                                                                                                                                                                                                                                                                            �   <       �          v       e#��     �   �   �   �          let errorResponse = {   &      message: "Something went wrong",       };   )    if (error instanceof NotFoundError) {         statusCode = 404;   ,      errorResponse.message = error.message;   2    } else if (error instanceof BadRequestError) {         statusCode = 400;   ,      errorResponse.message = error.message;   *      errorResponse.errors = error.errors;       }       =    return res.status(statusCode).send({ ...errorResponse });5��    �         =           %      �              5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#��     �   �   �   �          5��    �                     $                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�     �   �   �              let statusCode = 500;5��    �                                           5�_�                    �   )    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�    �   �   �   �      /const handlePatchOutput = async (req, res) => {5��    �   )                  q                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�     �   �   �          // patch5��    �                      ?      	               5�_�                    �        ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�     �   �   �   �        * �   �   �   �    �      �   �       5��                          >                     �    �                      ?                     �    �                    B                     �    �                     C                    �    �                  &   G              &       5�_�                    �   *    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�     �   �   �   �        * �   �   �   �    �   �   �   �      *  * @param {import('express').Request} req5��    �   *                 m                     �    �                  '   r              '       5�_�                    �   +    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�     �   �   �   �        * �   �   �   �    �   �   �   �      +  * @param {import('express').Response} res5��    �   +                 �                     �    �                  ,   �              ,       5�_�                    �   0    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�    �   �   �   �      0  * @param {import('express').NextFunction} next5��    �   0                 �                     �    �                    �                    5�_�                    �   1    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�     �   �   �   �      1// patch, but this time create content for output5��    �   1                 �                     �    �                     �                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�      �   �   �   �    �   �   �   �    5��    �                      �              �       5�_�                   ]   	    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�-     �   \   _   �      	// update5��    \   	                 �
                     �    ]                     �
                     5�_�                    ^       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�.     �   ]   c   �    �   ^   _   �    5��    ]                      �
              �       5�_�                    d   *    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�3     �   c   e   �      0const handleUpdateOutput = async (req, res) => {5��    c   *                  �                     5�_�                    s       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�<     �   r   s              let statusCode = 500;   )    let message = "Something went wrong";   )    if (error instanceof NotFoundError) {         statusCode = 404;         message = error.message;       }   4    return res.status(statusCode).send({ message });5��    r                            �               5�_�                    r       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�=     �   q   t   �          logger.error(error);5��    q                                         �    r                                          5�_�                    c       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�B     �   b   c          //5��    b                      t                     5�_�                    L       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�F     �   K   N   �      // retrieve one5��    K                    �                     �    L                     	                     5�_�                    M       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�F     �   M   S   �    �   M   N   �    5��    M                      	              �       5�_�                     M        ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�G     �   L   M          //5��    L                       	                     5�_�      !               R   *    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�J     �   Q   S   �      0const handleGetOneOutput = async (req, res) => {5��    Q   *                  �	                     5�_�       "           !   Y       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�O     �   X   Y              let statusCode = 500;   )    let message = "Something went wrong";   )    if (error instanceof NotFoundError) {         statusCode = 404;         message = error.message;       }   4    return res.status(statusCode).send({ message });5��    X                      �
      �               5�_�   !   #           "   X       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�O     �   W   Z   �          logger.error(error);5��    W                    �
                     �    X                     �
                     5�_�   "   $           #   D       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�V     �   C   F   �      // retrieve many5��    C                    �                     �    D                     �                     5�_�   #   %           $   E       ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�V     �   E   K   �    �   E   F   �    5��    E                      �              �       5�_�   $   &           %   D        ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�W     �   C   D          // retrieve many5��    C                      �                     5�_�   %   '           &   D        ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�X     �   C   D          //5��    C                      �                     5�_�   &   (           '   I   ,    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�\     �   H   J   �      2const handleGetManyOutputs = async (req, res) => {5��    H   ,                  �                     5�_�   '   )           (   K   #    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�a     �   J   N   �      #  const { responseId } = req.query;5��    J   #                 �                     �    K                     �                     �    K                    	                     �    L                     	                    �    L                      	                     5�_�   (   *           )   O   +    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�e     �   P   T   �          �   Q   R   �    �   N   R   �      +  return res.status(200).send({ outputs });5��    N   +                 z	                     �    O                     {	                    �    O                     {	                    �    O                     ~	                     �    O                    �	                     �    P                     �	                    �    P                    �	              %       5�_�   )   +           *      	    ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�q     �   
      �      	// create5��    
   	                 �                     �                         �                     5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�q     �         �    �         �    5��                          �              �       5�_�   +               ,           ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�q    �                //5��                          �                     5�_�                    �        ����                                                                                                                                                                                                                                                                                                                            �   @       �          v       e#�$     �   �   �        5��    �                      r                     5��