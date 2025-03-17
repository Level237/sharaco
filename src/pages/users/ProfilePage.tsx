import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useGetUserQuery } from "@/services/auth"
import { useState } from "react"
import { ImagePlus, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useGetCountriesQuery } from "@/services/guardService"

const formSchema = z.object({
  country: z.string().min(1, "Veuillez sélectionner un pays"),
  city: z.string().min(2, "La ville doit contenir au moins 2 caractères"),
  postalBox: z.string().optional(),
  companyName: z.string().optional(),
  address: z.string().min(5, "L'adresse doit contenir au moins 5 caractères"),
})

export const ProfilePage = () => {
  const { data: user, isLoading } = useGetUserQuery('Auth')
  const {data:countries,isLoading:isLoadingCountry}=useGetCountriesQuery("guard");
  console.log(countries)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      city: "",
      postalBox: "",
      companyName: "",
      address: "",
    },
  })

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setLogoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      // Ici, ajoutez votre logique pour envoyer les données au serveur
      console.log(values)
      console.log(logoFile)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-secondary/20">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Compléter votre profil
            </h3>
            <p className="text-muted-foreground text-lg">
              Ajoutez vos informations pour personnaliser vos devis
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              {/* Section Adresse */}
              <div className="space-y-6">
                <h4 className="text-xl text-black dark:text-white font-semibold">Informations de contact</h4>
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-black dark:text-white font-medium">Adresse</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="123 rue de la Paix" 
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-black dark:text-white font-medium">Pays</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="text-black dark:text-white">
                                <SelectValue placeholder="Sélectionnez un pays" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {!isLoadingCountry && countries.map((country:any) => (
                                <SelectItem key={(country.id)} value={country.id}>
                                  {country.country_name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-black dark:text-white font-medium">Ville</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Paris" 
                              {...field}
                              className="transition-all  duration-200 focus:ring-2 focus:ring-primary/20" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="postalBox"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-black dark:text-white font-medium">Boîte postale</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="BP 12345 (optionnel)" 
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20" 
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Ce champ est optionnel
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Section Entreprise */}
              {user?.isCompany === 1 && (
                <div className="space-y-6">
                  <h4 className="text-xl text-black dark:text-white font-semibold">Informations de l'entreprise</h4>
                  <Card className="transition-all duration-200 hover:shadow-lg border-primary/10">
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium">Nom de l'entreprise</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Nom de votre entreprise" 
                                  {...field}
                                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div>
                          <FormLabel className="text-sm font-medium">Logo de l'entreprise</FormLabel>
                          <div className="mt-4 flex items-center gap-x-8">
                            <div className={cn(
                              "relative flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-200 group cursor-pointer",
                              logoPreview 
                                ? "border-transparent ring-2 ring-primary ring-offset-4" 
                                : "border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                            )}
                            onClick={() => document.getElementById('logo-upload')?.click()}
                            >
                              {logoPreview ? (
                                <img
                                  src={logoPreview}
                                  alt="Logo preview"
                                  className="h-full w-full rounded-2xl object-cover"
                                />
                              ) : (
                                <div className="text-center space-y-2">
                                  <ImagePlus className="h-10 w-10 text-primary/60 mx-auto group-hover:text-primary transition-colors" />
                                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    Cliquez pour ajouter
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="space-y-3 flex-1">
                              <input
                                id="logo-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleLogoChange}
                              />
                              <p className="text-sm text-muted-foreground">
                                Format accepté : PNG, JPG ou GIF.<br />
                                Taille maximale : 2MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="flex justify-end pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg"
                  className="min-w-[200px] transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  Sauvegarder
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
} 