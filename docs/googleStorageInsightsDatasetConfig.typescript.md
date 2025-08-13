# `googleStorageInsightsDatasetConfig` Submodule <a name="`googleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageInsightsDatasetConfig <a name="GoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig(scope: Construct, id: string, config: GoogleStorageInsightsDatasetConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig">GoogleStorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig">GoogleStorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets">putExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations">putExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets">putIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations">putIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders">putSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects">putSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets">resetExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations">resetExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets">resetIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations">resetIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets">resetIncludeNewlyCreatedBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset">resetLinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber">resetOrganizationNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope">resetOrganizationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders">resetSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects">resetSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludeCloudStorageBuckets` <a name="putExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets"></a>

```typescript
public putExcludeCloudStorageBuckets(value: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `putExcludeCloudStorageLocations` <a name="putExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations"></a>

```typescript
public putExcludeCloudStorageLocations(value: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putExcludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity"></a>

```typescript
public putIdentity(value: GoogleStorageInsightsDatasetConfigIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `putIncludeCloudStorageBuckets` <a name="putIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets"></a>

```typescript
public putIncludeCloudStorageBuckets(value: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `putIncludeCloudStorageLocations` <a name="putIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations"></a>

```typescript
public putIncludeCloudStorageLocations(value: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putIncludeCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `putSourceFolders` <a name="putSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders"></a>

```typescript
public putSourceFolders(value: GoogleStorageInsightsDatasetConfigSourceFolders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceFolders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `putSourceProjects` <a name="putSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects"></a>

```typescript
public putSourceProjects(value: GoogleStorageInsightsDatasetConfigSourceProjects): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putSourceProjects.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageInsightsDatasetConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludeCloudStorageBuckets` <a name="resetExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageBuckets"></a>

```typescript
public resetExcludeCloudStorageBuckets(): void
```

##### `resetExcludeCloudStorageLocations` <a name="resetExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetExcludeCloudStorageLocations"></a>

```typescript
public resetExcludeCloudStorageLocations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeCloudStorageBuckets` <a name="resetIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageBuckets"></a>

```typescript
public resetIncludeCloudStorageBuckets(): void
```

##### `resetIncludeCloudStorageLocations` <a name="resetIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeCloudStorageLocations"></a>

```typescript
public resetIncludeCloudStorageLocations(): void
```

##### `resetIncludeNewlyCreatedBuckets` <a name="resetIncludeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetIncludeNewlyCreatedBuckets"></a>

```typescript
public resetIncludeNewlyCreatedBuckets(): void
```

##### `resetLinkDataset` <a name="resetLinkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetLinkDataset"></a>

```typescript
public resetLinkDataset(): void
```

##### `resetOrganizationNumber` <a name="resetOrganizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationNumber"></a>

```typescript
public resetOrganizationNumber(): void
```

##### `resetOrganizationScope` <a name="resetOrganizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetOrganizationScope"></a>

```typescript
public resetOrganizationScope(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSourceFolders` <a name="resetSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceFolders"></a>

```typescript
public resetSourceFolders(): void
```

##### `resetSourceProjects` <a name="resetSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetSourceProjects"></a>

```typescript
public resetSourceProjects(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageInsightsDatasetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState">datasetConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">excludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">excludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">includeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">includeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders">sourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects">sourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">datasetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput">excludeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput">excludeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput">includeCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput">includeCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput">includeNewlyCreatedBucketsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput">linkDatasetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput">organizationNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput">organizationScopeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput">sourceFoldersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput">sourceProjectsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId">datasetConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">includeNewlyCreatedBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset">linkDataset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber">organizationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope">organizationScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `datasetConfigState`<sup>Required</sup> <a name="datasetConfigState" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```typescript
public readonly datasetConfigState: string;
```

- *Type:* string

---

##### `excludeCloudStorageBuckets`<sup>Required</sup> <a name="excludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```typescript
public readonly excludeCloudStorageBuckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference</a>

---

##### `excludeCloudStorageLocations`<sup>Required</sup> <a name="excludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```typescript
public readonly excludeCloudStorageLocations: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identity"></a>

```typescript
public readonly identity: GoogleStorageInsightsDatasetConfigIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference">GoogleStorageInsightsDatasetConfigIdentityOutputReference</a>

---

##### `includeCloudStorageBuckets`<sup>Required</sup> <a name="includeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```typescript
public readonly includeCloudStorageBuckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference</a>

---

##### `includeCloudStorageLocations`<sup>Required</sup> <a name="includeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```typescript
public readonly includeCloudStorageLocations: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference</a>

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.link"></a>

```typescript
public readonly link: GoogleStorageInsightsDatasetConfigLinkList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList">GoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceFolders`<sup>Required</sup> <a name="sourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```typescript
public readonly sourceFolders: GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference">GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference</a>

---

##### `sourceProjects`<sup>Required</sup> <a name="sourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```typescript
public readonly sourceProjects: GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference">GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageInsightsDatasetConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference">GoogleStorageInsightsDatasetConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `datasetConfigIdInput`<sup>Optional</sup> <a name="datasetConfigIdInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```typescript
public readonly datasetConfigIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludeCloudStorageBucketsInput`<sup>Optional</sup> <a name="excludeCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBucketsInput"></a>

```typescript
public readonly excludeCloudStorageBucketsInput: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---

##### `excludeCloudStorageLocationsInput`<sup>Optional</sup> <a name="excludeCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocationsInput"></a>

```typescript
public readonly excludeCloudStorageLocationsInput: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.identityInput"></a>

```typescript
public readonly identityInput: GoogleStorageInsightsDatasetConfigIdentity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeCloudStorageBucketsInput`<sup>Optional</sup> <a name="includeCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageBucketsInput"></a>

```typescript
public readonly includeCloudStorageBucketsInput: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---

##### `includeCloudStorageLocationsInput`<sup>Optional</sup> <a name="includeCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocationsInput"></a>

```typescript
public readonly includeCloudStorageLocationsInput: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---

##### `includeNewlyCreatedBucketsInput`<sup>Optional</sup> <a name="includeNewlyCreatedBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBucketsInput"></a>

```typescript
public readonly includeNewlyCreatedBucketsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkDatasetInput`<sup>Optional</sup> <a name="linkDatasetInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDatasetInput"></a>

```typescript
public readonly linkDatasetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationNumberInput`<sup>Optional</sup> <a name="organizationNumberInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumberInput"></a>

```typescript
public readonly organizationNumberInput: string;
```

- *Type:* string

---

##### `organizationScopeInput`<sup>Optional</sup> <a name="organizationScopeInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScopeInput"></a>

```typescript
public readonly organizationScopeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDaysInput"></a>

```typescript
public readonly retentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `sourceFoldersInput`<sup>Optional</sup> <a name="sourceFoldersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceFoldersInput"></a>

```typescript
public readonly sourceFoldersInput: GoogleStorageInsightsDatasetConfigSourceFolders;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---

##### `sourceProjectsInput`<sup>Optional</sup> <a name="sourceProjectsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.sourceProjectsInput"></a>

```typescript
public readonly sourceProjectsInput: GoogleStorageInsightsDatasetConfigSourceProjects;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageInsightsDatasetConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```typescript
public readonly datasetConfigId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeNewlyCreatedBuckets`<sup>Required</sup> <a name="includeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```typescript
public readonly includeNewlyCreatedBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `linkDataset`<sup>Required</sup> <a name="linkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```typescript
public readonly linkDataset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organizationNumber`<sup>Required</sup> <a name="organizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```typescript
public readonly organizationNumber: string;
```

- *Type:* string

---

##### `organizationScope`<sup>Required</sup> <a name="organizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```typescript
public readonly organizationScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageInsightsDatasetConfigConfig <a name="GoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigConfig: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">datasetConfigId</a></code> | <code>string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>number</code> | Number of days of history that must be retained. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description">description</a></code> | <code>string</code> | An optional user-provided description for the dataset configuration with a maximum length of 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets">excludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | exclude_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations">excludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | exclude_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets">includeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | include_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations">includeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | include_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets">includeNewlyCreatedBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset">linkDataset</a></code> | <code>boolean \| cdktf.IResolvable</code> | A boolean terraform only flag to link/unlink dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber">organizationNumber</a></code> | <code>string</code> | Organization resource ID that the source projects should belong to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope">organizationScope</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines the options for providing a source organization for the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders">sourceFolders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | source_folders block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects">sourceProjects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | source_projects block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasetConfigId`<sup>Required</sup> <a name="datasetConfigId" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```typescript
public readonly datasetConfigId: string;
```

- *Type:* string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#dataset_config_id GoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.identity"></a>

```typescript
public readonly identity: GoogleStorageInsightsDatasetConfigIdentity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#identity GoogleStorageInsightsDatasetConfig#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#location GoogleStorageInsightsDatasetConfig#location}

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.retentionPeriodDays"></a>

```typescript
public readonly retentionPeriodDays: number;
```

- *Type:* number

Number of days of history that must be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#retention_period_days GoogleStorageInsightsDatasetConfig#retention_period_days}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional user-provided description for the dataset configuration with a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#description GoogleStorageInsightsDatasetConfig#description}

---

##### `excludeCloudStorageBuckets`<sup>Optional</sup> <a name="excludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageBuckets"></a>

```typescript
public readonly excludeCloudStorageBuckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

exclude_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_buckets}

---

##### `excludeCloudStorageLocations`<sup>Optional</sup> <a name="excludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.excludeCloudStorageLocations"></a>

```typescript
public readonly excludeCloudStorageLocations: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

exclude_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#exclude_cloud_storage_locations GoogleStorageInsightsDatasetConfig#exclude_cloud_storage_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#id GoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeCloudStorageBuckets`<sup>Optional</sup> <a name="includeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageBuckets"></a>

```typescript
public readonly includeCloudStorageBuckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

include_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_buckets GoogleStorageInsightsDatasetConfig#include_cloud_storage_buckets}

---

##### `includeCloudStorageLocations`<sup>Optional</sup> <a name="includeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeCloudStorageLocations"></a>

```typescript
public readonly includeCloudStorageLocations: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

include_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#include_cloud_storage_locations GoogleStorageInsightsDatasetConfig#include_cloud_storage_locations}

---

##### `includeNewlyCreatedBuckets`<sup>Optional</sup> <a name="includeNewlyCreatedBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.includeNewlyCreatedBuckets"></a>

```typescript
public readonly includeNewlyCreatedBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the request includes all the newly created buckets in the dataset that meet the inclusion and exclusion rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#include_newly_created_buckets GoogleStorageInsightsDatasetConfig#include_newly_created_buckets}

---

##### `linkDataset`<sup>Optional</sup> <a name="linkDataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.linkDataset"></a>

```typescript
public readonly linkDataset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A boolean terraform only flag to link/unlink dataset.

Setting this field to true while creation will automatically link the created dataset as an additional functionality.
-> **Note** A dataset config resource can only be destroyed once it is unlinked,
so users must set this field to false to unlink the dataset and destroy the dataset config resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#link_dataset GoogleStorageInsightsDatasetConfig#link_dataset}

---

##### `organizationNumber`<sup>Optional</sup> <a name="organizationNumber" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationNumber"></a>

```typescript
public readonly organizationNumber: string;
```

- *Type:* string

Organization resource ID that the source projects should belong to.

Projects that do not belong to the provided organization are not considered when creating the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#organization_number GoogleStorageInsightsDatasetConfig#organization_number}

---

##### `organizationScope`<sup>Optional</sup> <a name="organizationScope" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.organizationScope"></a>

```typescript
public readonly organizationScope: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines the options for providing a source organization for the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#organization_scope GoogleStorageInsightsDatasetConfig#organization_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#project GoogleStorageInsightsDatasetConfig#project}.

---

##### `sourceFolders`<sup>Optional</sup> <a name="sourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceFolders"></a>

```typescript
public readonly sourceFolders: GoogleStorageInsightsDatasetConfigSourceFolders;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

source_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#source_folders GoogleStorageInsightsDatasetConfig#source_folders}

---

##### `sourceProjects`<sup>Optional</sup> <a name="sourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.sourceProjects"></a>

```typescript
public readonly sourceProjects: GoogleStorageInsightsDatasetConfigSourceProjects;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

source_projects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#source_projects GoogleStorageInsightsDatasetConfig#source_projects}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageInsightsDatasetConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#timeouts GoogleStorageInsightsDatasetConfig#timeouts}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigExcludeCloudStorageBuckets: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]</code> | cloud_storage_buckets block. |

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```typescript
public readonly cloudStorageBuckets: IResolvable | GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucketName</a></code> | <code>string</code> | The list of cloud storage bucket names to exclude in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The list of cloud storage bucket names to exclude in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `bucketPrefixRegex`<sup>Optional</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```typescript
public readonly bucketPrefixRegex: string;
```

- *Type:* string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigExcludeCloudStorageLocations: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations">locations</a></code> | <code>string[]</code> | The list of cloud storage locations to exclude in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

The list of cloud storage locations to exclude in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigIdentity <a name="GoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigIdentity: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type">type</a></code> | <code>string</code> | Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of identity to use for the DatasetConfig. Possible values: ["IDENTITY_TYPE_PER_CONFIG", "IDENTITY_TYPE_PER_PROJECT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#type GoogleStorageInsightsDatasetConfig#type}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigIncludeCloudStorageBuckets: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]</code> | cloud_storage_buckets block. |

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.property.cloudStorageBuckets"></a>

```typescript
public readonly cloudStorageBuckets: IResolvable | GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]

cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#cloud_storage_buckets GoogleStorageInsightsDatasetConfig#cloud_storage_buckets}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName">bucketName</a></code> | <code>string</code> | The list of cloud storage bucket names to include in the DatasetConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>string</code> | The list of regex patterns for bucket names matching the regex. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The list of cloud storage bucket names to include in the DatasetConfig.

Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#bucket_name GoogleStorageInsightsDatasetConfig#bucket_name}

---

##### `bucketPrefixRegex`<sup>Optional</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.property.bucketPrefixRegex"></a>

```typescript
public readonly bucketPrefixRegex: string;
```

- *Type:* string

The list of regex patterns for bucket names matching the regex.

Regex should follow the syntax specified in google/re2 on GitHub.
Exactly one of the bucket_name and bucket_prefix_regex should be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#bucket_prefix_regex GoogleStorageInsightsDatasetConfig#bucket_prefix_regex}

---

### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigIncludeCloudStorageLocations: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations">locations</a></code> | <code>string[]</code> | The list of cloud storage locations to include in the DatasetConfig. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

The list of cloud storage locations to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#locations GoogleStorageInsightsDatasetConfig#locations}

---

### GoogleStorageInsightsDatasetConfigLink <a name="GoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigLink: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink = { ... }
```


### GoogleStorageInsightsDatasetConfigSourceFolders <a name="GoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigSourceFolders: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers">folderNumbers</a></code> | <code>string[]</code> | The list of folder numbers to include in the DatasetConfig. |

---

##### `folderNumbers`<sup>Optional</sup> <a name="folderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders.property.folderNumbers"></a>

```typescript
public readonly folderNumbers: string[];
```

- *Type:* string[]

The list of folder numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#folder_numbers GoogleStorageInsightsDatasetConfig#folder_numbers}

---

### GoogleStorageInsightsDatasetConfigSourceProjects <a name="GoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigSourceProjects: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers">projectNumbers</a></code> | <code>string[]</code> | The list of project numbers to include in the DatasetConfig. |

---

##### `projectNumbers`<sup>Optional</sup> <a name="projectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects.property.projectNumbers"></a>

```typescript
public readonly projectNumbers: string[];
```

- *Type:* string[]

The list of project numbers to include in the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#project_numbers GoogleStorageInsightsDatasetConfig#project_numbers}

---

### GoogleStorageInsightsDatasetConfigTimeouts <a name="GoogleStorageInsightsDatasetConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

const googleStorageInsightsDatasetConfigTimeouts: googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#create GoogleStorageInsightsDatasetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#delete GoogleStorageInsightsDatasetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_storage_insights_dataset_config#update GoogleStorageInsightsDatasetConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">resetBucketPrefixRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketPrefixRegex` <a name="resetBucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```typescript
public resetBucketPrefixRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucketPrefixRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixRegexInput`<sup>Optional</sup> <a name="bucketPrefixRegexInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```typescript
public readonly bucketPrefixRegexInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefixRegex`<sup>Required</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```typescript
public readonly bucketPrefixRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">putCloudStorageBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStorageBuckets` <a name="putCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```typescript
public putCloudStorageBuckets(value: IResolvable | GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloudStorageBucketsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```typescript
public readonly cloudStorageBuckets: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloudStorageBucketsInput`<sup>Optional</sup> <a name="cloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```typescript
public readonly cloudStorageBucketsInput: IResolvable | GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="GoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigIdentity;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIdentity">GoogleStorageInsightsDatasetConfigIdentity</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex">resetBucketPrefixRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetBucketPrefixRegex` <a name="resetBucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resetBucketPrefixRegex"></a>

```typescript
public resetBucketPrefixRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput">bucketPrefixRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">bucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `bucketPrefixRegexInput`<sup>Optional</sup> <a name="bucketPrefixRegexInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegexInput"></a>

```typescript
public readonly bucketPrefixRegexInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefixRegex`<sup>Required</sup> <a name="bucketPrefixRegex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```typescript
public readonly bucketPrefixRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets">putCloudStorageBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudStorageBuckets` <a name="putCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets"></a>

```typescript
public putCloudStorageBuckets(value: IResolvable | GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.putCloudStorageBuckets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">cloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput">cloudStorageBucketsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudStorageBuckets`<sup>Required</sup> <a name="cloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```typescript
public readonly cloudStorageBuckets: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `cloudStorageBucketsInput`<sup>Optional</sup> <a name="cloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBucketsInput"></a>

```typescript
public readonly cloudStorageBucketsInput: IResolvable | GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">GoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">GoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### GoogleStorageInsightsDatasetConfigLinkList <a name="GoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get"></a>

```typescript
public get(index: number): GoogleStorageInsightsDatasetConfigLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleStorageInsightsDatasetConfigLinkOutputReference <a name="GoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">linked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `linked`<sup>Required</sup> <a name="linked" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```typescript
public readonly linked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigLink;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigLink">GoogleStorageInsightsDatasetConfigLink</a>

---


### GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers">resetFolderNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFolderNumbers` <a name="resetFolderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resetFolderNumbers"></a>

```typescript
public resetFolderNumbers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput">folderNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">folderNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `folderNumbersInput`<sup>Optional</sup> <a name="folderNumbersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbersInput"></a>

```typescript
public readonly folderNumbersInput: string[];
```

- *Type:* string[]

---

##### `folderNumbers`<sup>Required</sup> <a name="folderNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```typescript
public readonly folderNumbers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigSourceFolders;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceFolders">GoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers">resetProjectNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectNumbers` <a name="resetProjectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resetProjectNumbers"></a>

```typescript
public resetProjectNumbers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput">projectNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">projectNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectNumbersInput`<sup>Optional</sup> <a name="projectNumbersInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbersInput"></a>

```typescript
public readonly projectNumbersInput: string[];
```

- *Type:* string[]

---

##### `projectNumbers`<sup>Required</sup> <a name="projectNumbers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```typescript
public readonly projectNumbers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageInsightsDatasetConfigSourceProjects;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigSourceProjects">GoogleStorageInsightsDatasetConfigSourceProjects</a>

---


### GoogleStorageInsightsDatasetConfigTimeoutsOutputReference <a name="GoogleStorageInsightsDatasetConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageInsightsDatasetConfig } from '@cdktf/provider-google-beta'

new googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageInsightsDatasetConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageInsightsDatasetConfig.GoogleStorageInsightsDatasetConfigTimeouts">GoogleStorageInsightsDatasetConfigTimeouts</a>

---



