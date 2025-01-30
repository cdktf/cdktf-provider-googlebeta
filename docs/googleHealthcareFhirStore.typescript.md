# `googleHealthcareFhirStore` Submodule <a name="`googleHealthcareFhirStore` Submodule" id="@cdktf/provider-google-beta.googleHealthcareFhirStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareFhirStore <a name="GoogleHealthcareFhirStore" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store google_healthcare_fhir_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStore(scope: Construct, id: string, config: GoogleHealthcareFhirStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig">GoogleHealthcareFhirStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig">GoogleHealthcareFhirStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs">putNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs">putStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing">resetComplexDataTypeReferenceParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict">resetDefaultSearchHandlingStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity">resetDisableReferentialIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning">resetDisableResourceVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport">resetEnableHistoryImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications">resetEnableHistoryModifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate">resetEnableUpdateCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs">resetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs">resetStreamConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig"></a>

```typescript
public putNotificationConfig(value: GoogleHealthcareFhirStoreNotificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `putNotificationConfigs` <a name="putNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs"></a>

```typescript
public putNotificationConfigs(value: IResolvable | GoogleHealthcareFhirStoreNotificationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putNotificationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]

---

##### `putStreamConfigs` <a name="putStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs"></a>

```typescript
public putStreamConfigs(value: IResolvable | GoogleHealthcareFhirStoreStreamConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putStreamConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleHealthcareFhirStoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---

##### `resetComplexDataTypeReferenceParsing` <a name="resetComplexDataTypeReferenceParsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetComplexDataTypeReferenceParsing"></a>

```typescript
public resetComplexDataTypeReferenceParsing(): void
```

##### `resetDefaultSearchHandlingStrict` <a name="resetDefaultSearchHandlingStrict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDefaultSearchHandlingStrict"></a>

```typescript
public resetDefaultSearchHandlingStrict(): void
```

##### `resetDisableReferentialIntegrity` <a name="resetDisableReferentialIntegrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableReferentialIntegrity"></a>

```typescript
public resetDisableReferentialIntegrity(): void
```

##### `resetDisableResourceVersioning` <a name="resetDisableResourceVersioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetDisableResourceVersioning"></a>

```typescript
public resetDisableResourceVersioning(): void
```

##### `resetEnableHistoryImport` <a name="resetEnableHistoryImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryImport"></a>

```typescript
public resetEnableHistoryImport(): void
```

##### `resetEnableHistoryModifications` <a name="resetEnableHistoryModifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableHistoryModifications"></a>

```typescript
public resetEnableHistoryModifications(): void
```

##### `resetEnableUpdateCreate` <a name="resetEnableUpdateCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetEnableUpdateCreate"></a>

```typescript
public resetEnableUpdateCreate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfig"></a>

```typescript
public resetNotificationConfig(): void
```

##### `resetNotificationConfigs` <a name="resetNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetNotificationConfigs"></a>

```typescript
public resetNotificationConfigs(): void
```

##### `resetStreamConfigs` <a name="resetStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetStreamConfigs"></a>

```typescript
public resetStreamConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareFhirStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleHealthcareFhirStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcareFhirStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcareFhirStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareFhirStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs">notificationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs">streamConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput">complexDataTypeReferenceParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput">defaultSearchHandlingStrictInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput">disableReferentialIntegrityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput">disableResourceVersioningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput">enableHistoryImportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput">enableHistoryModificationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput">enableUpdateCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput">notificationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput">streamConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport">enableHistoryImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications">enableHistoryModifications</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: GoogleHealthcareFhirStoreNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference">GoogleHealthcareFhirStoreNotificationConfigOutputReference</a>

---

##### `notificationConfigs`<sup>Required</sup> <a name="notificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigs"></a>

```typescript
public readonly notificationConfigs: GoogleHealthcareFhirStoreNotificationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList">GoogleHealthcareFhirStoreNotificationConfigsList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `streamConfigs`<sup>Required</sup> <a name="streamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigs"></a>

```typescript
public readonly streamConfigs: GoogleHealthcareFhirStoreStreamConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList">GoogleHealthcareFhirStoreStreamConfigsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcareFhirStoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference">GoogleHealthcareFhirStoreTimeoutsOutputReference</a>

---

##### `complexDataTypeReferenceParsingInput`<sup>Optional</sup> <a name="complexDataTypeReferenceParsingInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsingInput"></a>

```typescript
public readonly complexDataTypeReferenceParsingInput: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `defaultSearchHandlingStrictInput`<sup>Optional</sup> <a name="defaultSearchHandlingStrictInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrictInput"></a>

```typescript
public readonly defaultSearchHandlingStrictInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableReferentialIntegrityInput`<sup>Optional</sup> <a name="disableReferentialIntegrityInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrityInput"></a>

```typescript
public readonly disableReferentialIntegrityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableResourceVersioningInput`<sup>Optional</sup> <a name="disableResourceVersioningInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioningInput"></a>

```typescript
public readonly disableResourceVersioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHistoryImportInput`<sup>Optional</sup> <a name="enableHistoryImportInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImportInput"></a>

```typescript
public readonly enableHistoryImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHistoryModificationsInput`<sup>Optional</sup> <a name="enableHistoryModificationsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModificationsInput"></a>

```typescript
public readonly enableHistoryModificationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUpdateCreateInput`<sup>Optional</sup> <a name="enableUpdateCreateInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreateInput"></a>

```typescript
public readonly enableUpdateCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigInput"></a>

```typescript
public readonly notificationConfigInput: GoogleHealthcareFhirStoreNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---

##### `notificationConfigsInput`<sup>Optional</sup> <a name="notificationConfigsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.notificationConfigsInput"></a>

```typescript
public readonly notificationConfigsInput: IResolvable | GoogleHealthcareFhirStoreNotificationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]

---

##### `streamConfigsInput`<sup>Optional</sup> <a name="streamConfigsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.streamConfigsInput"></a>

```typescript
public readonly streamConfigsInput: IResolvable | GoogleHealthcareFhirStoreStreamConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleHealthcareFhirStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `complexDataTypeReferenceParsing`<sup>Required</sup> <a name="complexDataTypeReferenceParsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.complexDataTypeReferenceParsing"></a>

```typescript
public readonly complexDataTypeReferenceParsing: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `defaultSearchHandlingStrict`<sup>Required</sup> <a name="defaultSearchHandlingStrict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.defaultSearchHandlingStrict"></a>

```typescript
public readonly defaultSearchHandlingStrict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableReferentialIntegrity`<sup>Required</sup> <a name="disableReferentialIntegrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableReferentialIntegrity"></a>

```typescript
public readonly disableReferentialIntegrity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableResourceVersioning`<sup>Required</sup> <a name="disableResourceVersioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.disableResourceVersioning"></a>

```typescript
public readonly disableResourceVersioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHistoryImport`<sup>Required</sup> <a name="enableHistoryImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryImport"></a>

```typescript
public readonly enableHistoryImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHistoryModifications`<sup>Required</sup> <a name="enableHistoryModifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableHistoryModifications"></a>

```typescript
public readonly enableHistoryModifications: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUpdateCreate`<sup>Required</sup> <a name="enableUpdateCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.enableUpdateCreate"></a>

```typescript
public readonly enableUpdateCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareFhirStoreConfig <a name="GoogleHealthcareFhirStoreConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreConfig: googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name">name</a></code> | <code>string</code> | The resource name for the FhirStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing">complexDataTypeReferenceParsing</a></code> | <code>string</code> | Enable parsing of references within complex FHIR data types such as Extensions. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict">defaultSearchHandlingStrict</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity">disableReferentialIntegrity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable referential integrity in this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning">disableResourceVersioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable resource versioning for this FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport">enableHistoryImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications">enableHistoryModifications</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate">enableUpdateCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this FHIR store has the updateCreate capability. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key-value pairs used to organize FHIR stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs">notificationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs">streamConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version">version</a></code> | <code>string</code> | The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}

---

##### `complexDataTypeReferenceParsing`<sup>Optional</sup> <a name="complexDataTypeReferenceParsing" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.complexDataTypeReferenceParsing"></a>

```typescript
public readonly complexDataTypeReferenceParsing: string;
```

- *Type:* string

Enable parsing of references within complex FHIR data types such as Extensions.

If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED by default after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources. Possible values: ["COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED", "DISABLED", "ENABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#complex_data_type_reference_parsing GoogleHealthcareFhirStore#complex_data_type_reference_parsing}

---

##### `defaultSearchHandlingStrict`<sup>Optional</sup> <a name="defaultSearchHandlingStrict" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.defaultSearchHandlingStrict"></a>

```typescript
public readonly defaultSearchHandlingStrict: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, overrides the default search behavior for this FHIR store to handling=strict which returns an error for unrecognized search parameters.

If false, uses the FHIR specification default handling=lenient which ignores unrecognized search parameters.
The handling can always be changed from the default on an individual API call by setting the HTTP header Prefer: handling=strict or Prefer: handling=lenient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#default_search_handling_strict GoogleHealthcareFhirStore#default_search_handling_strict}

---

##### `disableReferentialIntegrity`<sup>Optional</sup> <a name="disableReferentialIntegrity" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableReferentialIntegrity"></a>

```typescript
public readonly disableReferentialIntegrity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable referential integrity in this FHIR store.

This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}

---

##### `disableResourceVersioning`<sup>Optional</sup> <a name="disableResourceVersioning" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.disableResourceVersioning"></a>

```typescript
public readonly disableResourceVersioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable resource versioning for this FHIR store.

This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}

---

##### `enableHistoryImport`<sup>Optional</sup> <a name="enableHistoryImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryImport"></a>

```typescript
public readonly enableHistoryImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow the bulk import API to accept history bundles and directly insert historical resource versions into the FHIR store.

Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}

---

##### `enableHistoryModifications`<sup>Optional</sup> <a name="enableHistoryModifications" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableHistoryModifications"></a>

```typescript
public readonly enableHistoryModifications: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow the ExecuteBundle API to accept history bundles, and directly insert and overwrite historical resource versions into the FHIR store.

If set to false, using history bundles fails with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#enable_history_modifications GoogleHealthcareFhirStore#enable_history_modifications}

---

##### `enableUpdateCreate`<sup>Optional</sup> <a name="enableUpdateCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.enableUpdateCreate"></a>

```typescript
public readonly enableUpdateCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this FHIR store has the updateCreate capability.

This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#id GoogleHealthcareFhirStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: GoogleHealthcareFhirStoreNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}

---

##### `notificationConfigs`<sup>Optional</sup> <a name="notificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.notificationConfigs"></a>

```typescript
public readonly notificationConfigs: IResolvable | GoogleHealthcareFhirStoreNotificationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#notification_configs GoogleHealthcareFhirStore#notification_configs}

---

##### `streamConfigs`<sup>Optional</sup> <a name="streamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.streamConfigs"></a>

```typescript
public readonly streamConfigs: IResolvable | GoogleHealthcareFhirStoreStreamConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcareFhirStoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}

---

### GoogleHealthcareFhirStoreNotificationConfig <a name="GoogleHealthcareFhirStoreNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreNotificationConfig: googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

### GoogleHealthcareFhirStoreNotificationConfigs <a name="GoogleHealthcareFhirStoreNotificationConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreNotificationConfigs: googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource">sendFullResource</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource. |

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}

---

##### `sendFullResource`<sup>Optional</sup> <a name="sendFullResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendFullResource"></a>

```typescript
public readonly sendFullResource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation.

Note that setting this to true does not guarantee that all resources will be sent in the format of
full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be
sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether
it needs to fetch the full resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#send_full_resource GoogleHealthcareFhirStore#send_full_resource}

---

##### `sendPreviousResourceOnDelete`<sup>Optional</sup> <a name="sendPreviousResourceOnDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs.property.sendPreviousResourceOnDelete"></a>

```typescript
public readonly sendPreviousResourceOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to send full FHIR resource to this Pub/Sub topic for deleting FHIR resource.

Note that setting this to
true does not guarantee that all previous resources will be sent in the format of full FHIR resource. When a
resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always
check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full previous
resource as a separate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#send_previous_resource_on_delete GoogleHealthcareFhirStore#send_previous_resource_on_delete}

---

### GoogleHealthcareFhirStoreStreamConfigs <a name="GoogleHealthcareFhirStoreStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreStreamConfigs: googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Supply a FHIR resource type (such as "Patient" or "Observation"). |

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.bigqueryDestination"></a>

```typescript
public readonly bigqueryDestination: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#bigquery_destination GoogleHealthcareFhirStore#bigquery_destination}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Supply a FHIR resource type (such as "Patient" or "Observation").

See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#resource_types GoogleHealthcareFhirStore#resource_types}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreStreamConfigsBigqueryDestination: googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri">datasetUri</a></code> | <code>string</code> | BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | schema_config block. |

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.datasetUri"></a>

```typescript
public readonly datasetUri: string;
```

- *Type:* string

BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#dataset_uri GoogleHealthcareFhirStore#dataset_uri}

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination.property.schemaConfig"></a>

```typescript
public readonly schemaConfig: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

schema_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#schema_config GoogleHealthcareFhirStore#schema_config}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig: googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>number</code> | The depth for all recursive structures in the output analytics schema. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | last_updated_partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType">schemaType</a></code> | <code>string</code> | Specifies the output schema type. |

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.recursiveStructureDepth"></a>

```typescript
public readonly recursiveStructureDepth: number;
```

- *Type:* number

The depth for all recursive structures in the output analytics schema.

For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#recursive_structure_depth GoogleHealthcareFhirStore#recursive_structure_depth}

---

##### `lastUpdatedPartitionConfig`<sup>Optional</sup> <a name="lastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.lastUpdatedPartitionConfig"></a>

```typescript
public readonly lastUpdatedPartitionConfig: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

last_updated_partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#last_updated_partition_config GoogleHealthcareFhirStore#last_updated_partition_config}

---

##### `schemaType`<sup>Optional</sup> <a name="schemaType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

Specifies the output schema type.

* ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
 * ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
 * LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#schema_type GoogleHealthcareFhirStore#schema_type}

---

### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig: googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type">type</a></code> | <code>string</code> | Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs">expirationMs</a></code> | <code>string</code> | Number of milliseconds for which to keep the storage for a partition. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of partitioning. Possible values: ["PARTITION_TYPE_UNSPECIFIED", "HOUR", "DAY", "MONTH", "YEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#type GoogleHealthcareFhirStore#type}

---

##### `expirationMs`<sup>Optional</sup> <a name="expirationMs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig.property.expirationMs"></a>

```typescript
public readonly expirationMs: string;
```

- *Type:* string

Number of milliseconds for which to keep the storage for a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#expiration_ms GoogleHealthcareFhirStore#expiration_ms}

---

### GoogleHealthcareFhirStoreTimeouts <a name="GoogleHealthcareFhirStoreTimeouts" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreTimeouts: googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareFhirStoreNotificationConfigOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareFhirStoreNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfig">GoogleHealthcareFhirStoreNotificationConfig</a>

---


### GoogleHealthcareFhirStoreNotificationConfigsList <a name="GoogleHealthcareFhirStoreNotificationConfigsList" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get"></a>

```typescript
public get(index: number): GoogleHealthcareFhirStoreNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareFhirStoreNotificationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>[]

---


### GoogleHealthcareFhirStoreNotificationConfigsOutputReference <a name="GoogleHealthcareFhirStoreNotificationConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource">resetSendFullResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete">resetSendPreviousResourceOnDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSendFullResource` <a name="resetSendFullResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendFullResource"></a>

```typescript
public resetSendFullResource(): void
```

##### `resetSendPreviousResourceOnDelete` <a name="resetSendPreviousResourceOnDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.resetSendPreviousResourceOnDelete"></a>

```typescript
public resetSendPreviousResourceOnDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput">sendFullResourceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput">sendPreviousResourceOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource">sendFullResource</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete">sendPreviousResourceOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `sendFullResourceInput`<sup>Optional</sup> <a name="sendFullResourceInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResourceInput"></a>

```typescript
public readonly sendFullResourceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendPreviousResourceOnDeleteInput`<sup>Optional</sup> <a name="sendPreviousResourceOnDeleteInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDeleteInput"></a>

```typescript
public readonly sendPreviousResourceOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `sendFullResource`<sup>Required</sup> <a name="sendFullResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendFullResource"></a>

```typescript
public readonly sendFullResource: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sendPreviousResourceOnDelete`<sup>Required</sup> <a name="sendPreviousResourceOnDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.sendPreviousResourceOnDelete"></a>

```typescript
public readonly sendPreviousResourceOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareFhirStoreNotificationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreNotificationConfigs">GoogleHealthcareFhirStoreNotificationConfigs</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig">putSchemaConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaConfig` <a name="putSchemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig"></a>

```typescript
public putSchemaConfig(value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.putSchemaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig">schemaConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput">datasetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput">schemaConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri">datasetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaConfig`<sup>Required</sup> <a name="schemaConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfig"></a>

```typescript
public readonly schemaConfig: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference</a>

---

##### `datasetUriInput`<sup>Optional</sup> <a name="datasetUriInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUriInput"></a>

```typescript
public readonly datasetUriInput: string;
```

- *Type:* string

---

##### `schemaConfigInput`<sup>Optional</sup> <a name="schemaConfigInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.schemaConfigInput"></a>

```typescript
public readonly schemaConfigInput: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---

##### `datasetUri`<sup>Required</sup> <a name="datasetUri" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.datasetUri"></a>

```typescript
public readonly datasetUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs">resetExpirationMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationMs` <a name="resetExpirationMs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.resetExpirationMs"></a>

```typescript
public resetExpirationMs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput">expirationMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs">expirationMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationMsInput`<sup>Optional</sup> <a name="expirationMsInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMsInput"></a>

```typescript
public readonly expirationMsInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expirationMs`<sup>Required</sup> <a name="expirationMs" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.expirationMs"></a>

```typescript
public readonly expirationMs: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig">putLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig">resetLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType">resetSchemaType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastUpdatedPartitionConfig` <a name="putLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig"></a>

```typescript
public putLastUpdatedPartitionConfig(value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.putLastUpdatedPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `resetLastUpdatedPartitionConfig` <a name="resetLastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetLastUpdatedPartitionConfig"></a>

```typescript
public resetLastUpdatedPartitionConfig(): void
```

##### `resetSchemaType` <a name="resetSchemaType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.resetSchemaType"></a>

```typescript
public resetSchemaType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig">lastUpdatedPartitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput">lastUpdatedPartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput">recursiveStructureDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput">schemaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth">recursiveStructureDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedPartitionConfig`<sup>Required</sup> <a name="lastUpdatedPartitionConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfig"></a>

```typescript
public readonly lastUpdatedPartitionConfig: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfigOutputReference</a>

---

##### `lastUpdatedPartitionConfigInput`<sup>Optional</sup> <a name="lastUpdatedPartitionConfigInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.lastUpdatedPartitionConfigInput"></a>

```typescript
public readonly lastUpdatedPartitionConfigInput: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig</a>

---

##### `recursiveStructureDepthInput`<sup>Optional</sup> <a name="recursiveStructureDepthInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepthInput"></a>

```typescript
public readonly recursiveStructureDepthInput: number;
```

- *Type:* number

---

##### `schemaTypeInput`<sup>Optional</sup> <a name="schemaTypeInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaTypeInput"></a>

```typescript
public readonly schemaTypeInput: string;
```

- *Type:* string

---

##### `recursiveStructureDepth`<sup>Required</sup> <a name="recursiveStructureDepth" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.recursiveStructureDepth"></a>

```typescript
public readonly recursiveStructureDepth: number;
```

- *Type:* number

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig</a>

---


### GoogleHealthcareFhirStoreStreamConfigsList <a name="GoogleHealthcareFhirStoreStreamConfigsList" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get"></a>

```typescript
public get(index: number): GoogleHealthcareFhirStoreStreamConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareFhirStoreStreamConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>[]

---


### GoogleHealthcareFhirStoreStreamConfigsOutputReference <a name="GoogleHealthcareFhirStoreStreamConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```typescript
public putBigqueryDestination(value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```typescript
public readonly bigqueryDestination: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```typescript
public readonly bigqueryDestinationInput: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination">GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareFhirStoreStreamConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreStreamConfigs">GoogleHealthcareFhirStoreStreamConfigs</a>

---


### GoogleHealthcareFhirStoreTimeoutsOutputReference <a name="GoogleHealthcareFhirStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareFhirStore } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareFhirStoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStore.GoogleHealthcareFhirStoreTimeouts">GoogleHealthcareFhirStoreTimeouts</a>

---



