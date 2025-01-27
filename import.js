import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

// Initialiser le client Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Lire le fichier JSON
const data = JSON.parse(fs.readFileSync('products.js', 'utf8'));

// Fonction pour insérer les données dans Supabase
async function migrateData() {
  try {
    const { data, error } = await supabase
      .from('your_table_name')
      .insert(data);

    if (error) {
      throw error;
    }

    console.log('Migration réussie:', data);
  } catch (error) {
    console.error('Erreur lors de la migration:', error.message);
  }
}

// Exécuter la migration
migrateData();
