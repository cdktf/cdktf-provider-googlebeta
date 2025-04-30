# `googleComputeImage` Submodule <a name="`googleComputeImage` Submodule" id="@cdktf/provider-google-beta.googleComputeImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeImage <a name="GoogleComputeImage" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image google_compute_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImage(scope: Construct, id: string, config: GoogleComputeImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig">GoogleComputeImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig">GoogleComputeImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putGuestOsFeatures">putGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putImageEncryptionKey">putImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putRawDisk">putRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putShieldedInstanceInitialState">putShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceDiskEncryptionKey">putSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceImageEncryptionKey">putSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetGuestOsFeatures">resetGuestOsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetImageEncryptionKey">resetImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetLicenses">resetLicenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetRawDisk">resetRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetShieldedInstanceInitialState">resetShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceDisk">resetSourceDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceDiskEncryptionKey">resetSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceImageEncryptionKey">resetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetStorageLocations">resetStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGuestOsFeatures` <a name="putGuestOsFeatures" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putGuestOsFeatures"></a>

```typescript
public putGuestOsFeatures(value: IResolvable | GoogleComputeImageGuestOsFeatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putGuestOsFeatures.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]

---

##### `putImageEncryptionKey` <a name="putImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putImageEncryptionKey"></a>

```typescript
public putImageEncryptionKey(value: GoogleComputeImageImageEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a>

---

##### `putRawDisk` <a name="putRawDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putRawDisk"></a>

```typescript
public putRawDisk(value: GoogleComputeImageRawDisk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putRawDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a>

---

##### `putShieldedInstanceInitialState` <a name="putShieldedInstanceInitialState" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putShieldedInstanceInitialState"></a>

```typescript
public putShieldedInstanceInitialState(value: GoogleComputeImageShieldedInstanceInitialState): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putShieldedInstanceInitialState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a>

---

##### `putSourceDiskEncryptionKey` <a name="putSourceDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceDiskEncryptionKey"></a>

```typescript
public putSourceDiskEncryptionKey(value: GoogleComputeImageSourceDiskEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a>

---

##### `putSourceImageEncryptionKey` <a name="putSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceImageEncryptionKey"></a>

```typescript
public putSourceImageEncryptionKey(value: GoogleComputeImageSourceImageEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceSnapshotEncryptionKey"></a>

```typescript
public putSourceSnapshotEncryptionKey(value: GoogleComputeImageSourceSnapshotEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetFamily"></a>

```typescript
public resetFamily(): void
```

##### `resetGuestOsFeatures` <a name="resetGuestOsFeatures" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetGuestOsFeatures"></a>

```typescript
public resetGuestOsFeatures(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageEncryptionKey` <a name="resetImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetImageEncryptionKey"></a>

```typescript
public resetImageEncryptionKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLicenses` <a name="resetLicenses" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetLicenses"></a>

```typescript
public resetLicenses(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRawDisk` <a name="resetRawDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetRawDisk"></a>

```typescript
public resetRawDisk(): void
```

##### `resetShieldedInstanceInitialState` <a name="resetShieldedInstanceInitialState" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetShieldedInstanceInitialState"></a>

```typescript
public resetShieldedInstanceInitialState(): void
```

##### `resetSourceDisk` <a name="resetSourceDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceDisk"></a>

```typescript
public resetSourceDisk(): void
```

##### `resetSourceDiskEncryptionKey` <a name="resetSourceDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceDiskEncryptionKey"></a>

```typescript
public resetSourceDiskEncryptionKey(): void
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceImage"></a>

```typescript
public resetSourceImage(): void
```

##### `resetSourceImageEncryptionKey` <a name="resetSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceImageEncryptionKey"></a>

```typescript
public resetSourceImageEncryptionKey(): void
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceSnapshot"></a>

```typescript
public resetSourceSnapshot(): void
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetSourceSnapshotEncryptionKey"></a>

```typescript
public resetSourceSnapshotEncryptionKey(): void
```

##### `resetStorageLocations` <a name="resetStorageLocations" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetStorageLocations"></a>

```typescript
public resetStorageLocations(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isConstruct"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

googleComputeImage.GoogleComputeImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isTerraformElement"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

googleComputeImage.GoogleComputeImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isTerraformResource"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

googleComputeImage.GoogleComputeImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.generateConfigForImport"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

googleComputeImage.GoogleComputeImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.archiveSizeBytes">archiveSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.guestOsFeatures">guestOsFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList">GoogleComputeImageGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.imageEncryptionKey">imageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference">GoogleComputeImageImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.rawDisk">rawDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference">GoogleComputeImageRawDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.shieldedInstanceInitialState">shieldedInstanceInitialState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference">GoogleComputeImageShieldedInstanceInitialStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference">GoogleComputeImageSourceDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference">GoogleComputeImageSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference">GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference">GoogleComputeImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.familyInput">familyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.guestOsFeaturesInput">guestOsFeaturesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.imageEncryptionKeyInput">imageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.licensesInput">licensesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.rawDiskInput">rawDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.shieldedInstanceInitialStateInput">shieldedInstanceInitialStateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDiskEncryptionKeyInput">sourceDiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDiskInput">sourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImageEncryptionKeyInput">sourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImageInput">sourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.storageLocationsInput">storageLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.licenses">licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImage">sourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archiveSizeBytes`<sup>Required</sup> <a name="archiveSizeBytes" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.archiveSizeBytes"></a>

```typescript
public readonly archiveSizeBytes: number;
```

- *Type:* number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `guestOsFeatures`<sup>Required</sup> <a name="guestOsFeatures" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.guestOsFeatures"></a>

```typescript
public readonly guestOsFeatures: GoogleComputeImageGuestOsFeaturesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList">GoogleComputeImageGuestOsFeaturesList</a>

---

##### `imageEncryptionKey`<sup>Required</sup> <a name="imageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.imageEncryptionKey"></a>

```typescript
public readonly imageEncryptionKey: GoogleComputeImageImageEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference">GoogleComputeImageImageEncryptionKeyOutputReference</a>

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `rawDisk`<sup>Required</sup> <a name="rawDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.rawDisk"></a>

```typescript
public readonly rawDisk: GoogleComputeImageRawDiskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference">GoogleComputeImageRawDiskOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `shieldedInstanceInitialState`<sup>Required</sup> <a name="shieldedInstanceInitialState" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.shieldedInstanceInitialState"></a>

```typescript
public readonly shieldedInstanceInitialState: GoogleComputeImageShieldedInstanceInitialStateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference">GoogleComputeImageShieldedInstanceInitialStateOutputReference</a>

---

##### `sourceDiskEncryptionKey`<sup>Required</sup> <a name="sourceDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDiskEncryptionKey"></a>

```typescript
public readonly sourceDiskEncryptionKey: GoogleComputeImageSourceDiskEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference">GoogleComputeImageSourceDiskEncryptionKeyOutputReference</a>

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImageEncryptionKey"></a>

```typescript
public readonly sourceImageEncryptionKey: GoogleComputeImageSourceImageEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference">GoogleComputeImageSourceImageEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshotEncryptionKey"></a>

```typescript
public readonly sourceSnapshotEncryptionKey: GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference">GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeImageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference">GoogleComputeImageTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.familyInput"></a>

```typescript
public readonly familyInput: string;
```

- *Type:* string

---

##### `guestOsFeaturesInput`<sup>Optional</sup> <a name="guestOsFeaturesInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.guestOsFeaturesInput"></a>

```typescript
public readonly guestOsFeaturesInput: IResolvable | GoogleComputeImageGuestOsFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageEncryptionKeyInput`<sup>Optional</sup> <a name="imageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.imageEncryptionKeyInput"></a>

```typescript
public readonly imageEncryptionKeyInput: GoogleComputeImageImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `licensesInput`<sup>Optional</sup> <a name="licensesInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.licensesInput"></a>

```typescript
public readonly licensesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rawDiskInput`<sup>Optional</sup> <a name="rawDiskInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.rawDiskInput"></a>

```typescript
public readonly rawDiskInput: GoogleComputeImageRawDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a>

---

##### `shieldedInstanceInitialStateInput`<sup>Optional</sup> <a name="shieldedInstanceInitialStateInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.shieldedInstanceInitialStateInput"></a>

```typescript
public readonly shieldedInstanceInitialStateInput: GoogleComputeImageShieldedInstanceInitialState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a>

---

##### `sourceDiskEncryptionKeyInput`<sup>Optional</sup> <a name="sourceDiskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDiskEncryptionKeyInput"></a>

```typescript
public readonly sourceDiskEncryptionKeyInput: GoogleComputeImageSourceDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a>

---

##### `sourceDiskInput`<sup>Optional</sup> <a name="sourceDiskInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDiskInput"></a>

```typescript
public readonly sourceDiskInput: string;
```

- *Type:* string

---

##### `sourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="sourceImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImageEncryptionKeyInput"></a>

```typescript
public readonly sourceImageEncryptionKeyInput: GoogleComputeImageSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImageInput"></a>

```typescript
public readonly sourceImageInput: string;
```

- *Type:* string

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshotEncryptionKeyInput"></a>

```typescript
public readonly sourceSnapshotEncryptionKeyInput: GoogleComputeImageSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a>

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshotInput"></a>

```typescript
public readonly sourceSnapshotInput: string;
```

- *Type:* string

---

##### `storageLocationsInput`<sup>Optional</sup> <a name="storageLocationsInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.storageLocationsInput"></a>

```typescript
public readonly storageLocationsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.licenses"></a>

```typescript
public readonly licenses: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeImageConfig <a name="GoogleComputeImageConfig" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageConfig: googleComputeImage.GoogleComputeImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Size of the image when restored onto a persistent disk (in GB). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.family">family</a></code> | <code>string</code> | The name of the image family to which this image belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.guestOsFeatures">guestOsFeatures</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]</code> | guest_os_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#id GoogleComputeImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.imageEncryptionKey">imageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a></code> | image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this Image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.licenses">licenses</a></code> | <code>string[]</code> | Any applicable license URI. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#project GoogleComputeImage#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.rawDisk">rawDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a></code> | raw_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.shieldedInstanceInitialState">shieldedInstanceInitialState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a></code> | shielded_instance_initial_state block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | The source disk to create this image based on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceDiskEncryptionKey">sourceDiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a></code> | source_disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceImage">sourceImage</a></code> | <code>string</code> | URL of the source image used to create this image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | URL of the source snapshot used to create this image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#name GoogleComputeImage#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#description GoogleComputeImage#description}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Size of the image when restored onto a persistent disk (in GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#disk_size_gb GoogleComputeImage#disk_size_gb}

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

The name of the image family to which this image belongs.

You can
create disks by specifying an image family instead of a specific
image name. The image family always returns its latest image that is
not deprecated. The name of the image family must comply with
RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#family GoogleComputeImage#family}

---

##### `guestOsFeatures`<sup>Optional</sup> <a name="guestOsFeatures" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.guestOsFeatures"></a>

```typescript
public readonly guestOsFeatures: IResolvable | GoogleComputeImageGuestOsFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]

guest_os_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#guest_os_features GoogleComputeImage#guest_os_features}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#id GoogleComputeImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageEncryptionKey`<sup>Optional</sup> <a name="imageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.imageEncryptionKey"></a>

```typescript
public readonly imageEncryptionKey: GoogleComputeImageImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a>

image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#image_encryption_key GoogleComputeImage#image_encryption_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this Image.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#labels GoogleComputeImage#labels}

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.licenses"></a>

```typescript
public readonly licenses: string[];
```

- *Type:* string[]

Any applicable license URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#licenses GoogleComputeImage#licenses}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#project GoogleComputeImage#project}.

---

##### `rawDisk`<sup>Optional</sup> <a name="rawDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.rawDisk"></a>

```typescript
public readonly rawDisk: GoogleComputeImageRawDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a>

raw_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#raw_disk GoogleComputeImage#raw_disk}

---

##### `shieldedInstanceInitialState`<sup>Optional</sup> <a name="shieldedInstanceInitialState" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.shieldedInstanceInitialState"></a>

```typescript
public readonly shieldedInstanceInitialState: GoogleComputeImageShieldedInstanceInitialState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a>

shielded_instance_initial_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#shielded_instance_initial_state GoogleComputeImage#shielded_instance_initial_state}

---

##### `sourceDisk`<sup>Optional</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

The source disk to create this image based on.

You must provide either this property or the
rawDisk.source property but not both to create an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source_disk GoogleComputeImage#source_disk}

---

##### `sourceDiskEncryptionKey`<sup>Optional</sup> <a name="sourceDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceDiskEncryptionKey"></a>

```typescript
public readonly sourceDiskEncryptionKey: GoogleComputeImageSourceDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a>

source_disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source_disk_encryption_key GoogleComputeImage#source_disk_encryption_key}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

URL of the source image used to create this image.

In order to create an image, you must provide the full or partial
URL of one of the following:

* The selfLink URL
* This property
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source_image GoogleComputeImage#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceImageEncryptionKey"></a>

```typescript
public readonly sourceImageEncryptionKey: GoogleComputeImageSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source_image_encryption_key GoogleComputeImage#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

URL of the source snapshot used to create this image.

In order to create an image, you must provide the full or partial URL of one of the following:

* The selfLink URL
* This property
* The sourceImage URL
* The rawDisk.source URL
* The sourceDisk URL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source_snapshot GoogleComputeImage#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.sourceSnapshotEncryptionKey"></a>

```typescript
public readonly sourceSnapshotEncryptionKey: GoogleComputeImageSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source_snapshot_encryption_key GoogleComputeImage#source_snapshot_encryption_key}

---

##### `storageLocations`<sup>Optional</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

Cloud Storage bucket storage location of the image (regional or multi-regional). Reference link: https://cloud.google.com/compute/docs/reference/rest/v1/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#storage_locations GoogleComputeImage#storage_locations}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeImageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#timeouts GoogleComputeImage#timeouts}

---

### GoogleComputeImageGuestOsFeatures <a name="GoogleComputeImageGuestOsFeatures" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageGuestOsFeatures: googleComputeImage.GoogleComputeImageGuestOsFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures.property.type">type</a></code> | <code>string</code> | The type of supported feature. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of supported feature.

Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Possible values: ["MULTI_IP_SUBNET", "SECURE_BOOT", "SEV_CAPABLE", "UEFI_COMPATIBLE", "VIRTIO_SCSI_MULTIQUEUE", "WINDOWS", "GVNIC", "IDPF", "SEV_LIVE_MIGRATABLE", "SEV_SNP_CAPABLE", "SUSPEND_RESUME_COMPATIBLE", "TDX_CAPABLE", "SEV_LIVE_MIGRATABLE_V2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#type GoogleComputeImage#type}

---

### GoogleComputeImageImageEncryptionKey <a name="GoogleComputeImageImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageImageEncryptionKey: googleComputeImage.GoogleComputeImageImageEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_self_link GoogleComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_service_account GoogleComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#raw_key GoogleComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#rsa_encrypted_key GoogleComputeImage#rsa_encrypted_key}

---

### GoogleComputeImageRawDisk <a name="GoogleComputeImageRawDisk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageRawDisk: googleComputeImage.GoogleComputeImageRawDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.property.source">source</a></code> | <code>string</code> | The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.property.containerType">containerType</a></code> | <code>string</code> | The format used to encode and transmit the block device, which should be TAR. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.property.sha1">sha1</a></code> | <code>string</code> | An optional SHA1 checksum of the disk image before unpackaging. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The full Google Cloud Storage URL where disk storage is stored You must provide either this property or the sourceDisk property but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#source GoogleComputeImage#source}

---

##### `containerType`<sup>Optional</sup> <a name="containerType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

The format used to encode and transmit the block device, which should be TAR.

This is just a container and transmission format
and not a runtime format. Provided by the client when the disk
image is created. Default value: "TAR" Possible values: ["TAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#container_type GoogleComputeImage#container_type}

---

##### `sha1`<sup>Optional</sup> <a name="sha1" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk.property.sha1"></a>

```typescript
public readonly sha1: string;
```

- *Type:* string

An optional SHA1 checksum of the disk image before unpackaging.

This is provided by the client when the disk image is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#sha1 GoogleComputeImage#sha1}

---

### GoogleComputeImageShieldedInstanceInitialState <a name="GoogleComputeImageShieldedInstanceInitialState" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageShieldedInstanceInitialState: googleComputeImage.GoogleComputeImageShieldedInstanceInitialState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.dbs">dbs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]</code> | dbs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.dbxs">dbxs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]</code> | dbxs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.keks">keks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]</code> | keks block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.pk">pk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a></code> | pk block. |

---

##### `dbs`<sup>Optional</sup> <a name="dbs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.dbs"></a>

```typescript
public readonly dbs: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]

dbs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#dbs GoogleComputeImage#dbs}

---

##### `dbxs`<sup>Optional</sup> <a name="dbxs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.dbxs"></a>

```typescript
public readonly dbxs: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbxs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]

dbxs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#dbxs GoogleComputeImage#dbxs}

---

##### `keks`<sup>Optional</sup> <a name="keks" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.keks"></a>

```typescript
public readonly keks: IResolvable | GoogleComputeImageShieldedInstanceInitialStateKeks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]

keks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#keks GoogleComputeImage#keks}

---

##### `pk`<sup>Optional</sup> <a name="pk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState.property.pk"></a>

```typescript
public readonly pk: GoogleComputeImageShieldedInstanceInitialStatePk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#pk GoogleComputeImage#pk}

---

### GoogleComputeImageShieldedInstanceInitialStateDbs <a name="GoogleComputeImageShieldedInstanceInitialStateDbs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageShieldedInstanceInitialStateDbs: googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs.property.content">content</a></code> | <code>string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs.property.fileType">fileType</a></code> | <code>string</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#content GoogleComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#file_type GoogleComputeImage#file_type}

---

### GoogleComputeImageShieldedInstanceInitialStateDbxs <a name="GoogleComputeImageShieldedInstanceInitialStateDbxs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageShieldedInstanceInitialStateDbxs: googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs.property.content">content</a></code> | <code>string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs.property.fileType">fileType</a></code> | <code>string</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#content GoogleComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#file_type GoogleComputeImage#file_type}

---

### GoogleComputeImageShieldedInstanceInitialStateKeks <a name="GoogleComputeImageShieldedInstanceInitialStateKeks" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageShieldedInstanceInitialStateKeks: googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks.property.content">content</a></code> | <code>string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks.property.fileType">fileType</a></code> | <code>string</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#content GoogleComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#file_type GoogleComputeImage#file_type}

---

### GoogleComputeImageShieldedInstanceInitialStatePk <a name="GoogleComputeImageShieldedInstanceInitialStatePk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageShieldedInstanceInitialStatePk: googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk.property.content">content</a></code> | <code>string</code> | The raw content in the secure keys file. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk.property.fileType">fileType</a></code> | <code>string</code> | The file type of source file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The raw content in the secure keys file.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#content GoogleComputeImage#content}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

The file type of source file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#file_type GoogleComputeImage#file_type}

---

### GoogleComputeImageSourceDiskEncryptionKey <a name="GoogleComputeImageSourceDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageSourceDiskEncryptionKey: googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_self_link GoogleComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_service_account GoogleComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#raw_key GoogleComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#rsa_encrypted_key GoogleComputeImage#rsa_encrypted_key}

---

### GoogleComputeImageSourceImageEncryptionKey <a name="GoogleComputeImageSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageSourceImageEncryptionKey: googleComputeImage.GoogleComputeImageSourceImageEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_self_link GoogleComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_service_account GoogleComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#raw_key GoogleComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#rsa_encrypted_key GoogleComputeImage#rsa_encrypted_key}

---

### GoogleComputeImageSourceSnapshotEncryptionKey <a name="GoogleComputeImageSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageSourceSnapshotEncryptionKey: googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key used to decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key used to decrypt this resource.

Also called KmsKeyName
in the cloud console. Your project's Compute Engine System service account
('service-{{PROJECT_NUMBER}}@compute-system.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
See https://cloud.google.com/compute/docs/disks/customer-managed-encryption#encrypt_a_new_persistent_disk_with_your_own_keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_self_link GoogleComputeImage#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service
account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#kms_key_service_account GoogleComputeImage#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#raw_key GoogleComputeImage#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

You can provide either the rawKey or the rsaEncryptedKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#rsa_encrypted_key GoogleComputeImage#rsa_encrypted_key}

---

### GoogleComputeImageTimeouts <a name="GoogleComputeImageTimeouts" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

const googleComputeImageTimeouts: googleComputeImage.GoogleComputeImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#create GoogleComputeImage#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#delete GoogleComputeImage#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#update GoogleComputeImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#create GoogleComputeImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#delete GoogleComputeImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_compute_image#update GoogleComputeImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeImageGuestOsFeaturesList <a name="GoogleComputeImageGuestOsFeaturesList" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageGuestOsFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.get"></a>

```typescript
public get(index: number): GoogleComputeImageGuestOsFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageGuestOsFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>[]

---


### GoogleComputeImageGuestOsFeaturesOutputReference <a name="GoogleComputeImageGuestOsFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageGuestOsFeatures;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageGuestOsFeatures">GoogleComputeImageGuestOsFeatures</a>

---


### GoogleComputeImageImageEncryptionKeyOutputReference <a name="GoogleComputeImageImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageImageEncryptionKey">GoogleComputeImageImageEncryptionKey</a>

---


### GoogleComputeImageRawDiskOutputReference <a name="GoogleComputeImageRawDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageRawDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resetContainerType">resetContainerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resetSha1">resetSha1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerType` <a name="resetContainerType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resetContainerType"></a>

```typescript
public resetContainerType(): void
```

##### `resetSha1` <a name="resetSha1" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.resetSha1"></a>

```typescript
public resetSha1(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.containerTypeInput">containerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.sha1Input">sha1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.sha1">sha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.containerTypeInput"></a>

```typescript
public readonly containerTypeInput: string;
```

- *Type:* string

---

##### `sha1Input`<sup>Optional</sup> <a name="sha1Input" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.sha1Input"></a>

```typescript
public readonly sha1Input: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `sha1`<sup>Required</sup> <a name="sha1" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.sha1"></a>

```typescript
public readonly sha1: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageRawDisk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageRawDisk">GoogleComputeImageRawDisk</a>

---


### GoogleComputeImageShieldedInstanceInitialStateDbsList <a name="GoogleComputeImageShieldedInstanceInitialStateDbsList" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.get"></a>

```typescript
public get(index: number): GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]

---


### GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference <a name="GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.resetFileType"></a>

```typescript
public resetFileType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>

---


### GoogleComputeImageShieldedInstanceInitialStateDbxsList <a name="GoogleComputeImageShieldedInstanceInitialStateDbxsList" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.get"></a>

```typescript
public get(index: number): GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbxs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]

---


### GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference <a name="GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.resetFileType"></a>

```typescript
public resetFileType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbxs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>

---


### GoogleComputeImageShieldedInstanceInitialStateKeksList <a name="GoogleComputeImageShieldedInstanceInitialStateKeksList" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.get"></a>

```typescript
public get(index: number): GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageShieldedInstanceInitialStateKeks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]

---


### GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference <a name="GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.resetFileType"></a>

```typescript
public resetFileType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageShieldedInstanceInitialStateKeks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>

---


### GoogleComputeImageShieldedInstanceInitialStateOutputReference <a name="GoogleComputeImageShieldedInstanceInitialStateOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putDbs">putDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putDbxs">putDbxs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putKeks">putKeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putPk">putPk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetDbs">resetDbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs">resetDbxs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetKeks">resetKeks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetPk">resetPk</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbs` <a name="putDbs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putDbs"></a>

```typescript
public putDbs(value: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putDbs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]

---

##### `putDbxs` <a name="putDbxs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putDbxs"></a>

```typescript
public putDbxs(value: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbxs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putDbxs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]

---

##### `putKeks` <a name="putKeks" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putKeks"></a>

```typescript
public putKeks(value: IResolvable | GoogleComputeImageShieldedInstanceInitialStateKeks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putKeks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]

---

##### `putPk` <a name="putPk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putPk"></a>

```typescript
public putPk(value: GoogleComputeImageShieldedInstanceInitialStatePk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.putPk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a>

---

##### `resetDbs` <a name="resetDbs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetDbs"></a>

```typescript
public resetDbs(): void
```

##### `resetDbxs` <a name="resetDbxs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetDbxs"></a>

```typescript
public resetDbxs(): void
```

##### `resetKeks` <a name="resetKeks" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetKeks"></a>

```typescript
public resetKeks(): void
```

##### `resetPk` <a name="resetPk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.resetPk"></a>

```typescript
public resetPk(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbs">dbs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList">GoogleComputeImageShieldedInstanceInitialStateDbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs">dbxs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList">GoogleComputeImageShieldedInstanceInitialStateDbxsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.keks">keks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList">GoogleComputeImageShieldedInstanceInitialStateKeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.pk">pk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference">GoogleComputeImageShieldedInstanceInitialStatePkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput">dbsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput">dbxsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput">keksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput">pkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbs`<sup>Required</sup> <a name="dbs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbs"></a>

```typescript
public readonly dbs: GoogleComputeImageShieldedInstanceInitialStateDbsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbsList">GoogleComputeImageShieldedInstanceInitialStateDbsList</a>

---

##### `dbxs`<sup>Required</sup> <a name="dbxs" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbxs"></a>

```typescript
public readonly dbxs: GoogleComputeImageShieldedInstanceInitialStateDbxsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxsList">GoogleComputeImageShieldedInstanceInitialStateDbxsList</a>

---

##### `keks`<sup>Required</sup> <a name="keks" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.keks"></a>

```typescript
public readonly keks: GoogleComputeImageShieldedInstanceInitialStateKeksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeksList">GoogleComputeImageShieldedInstanceInitialStateKeksList</a>

---

##### `pk`<sup>Required</sup> <a name="pk" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.pk"></a>

```typescript
public readonly pk: GoogleComputeImageShieldedInstanceInitialStatePkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference">GoogleComputeImageShieldedInstanceInitialStatePkOutputReference</a>

---

##### `dbsInput`<sup>Optional</sup> <a name="dbsInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbsInput"></a>

```typescript
public readonly dbsInput: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbs">GoogleComputeImageShieldedInstanceInitialStateDbs</a>[]

---

##### `dbxsInput`<sup>Optional</sup> <a name="dbxsInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.dbxsInput"></a>

```typescript
public readonly dbxsInput: IResolvable | GoogleComputeImageShieldedInstanceInitialStateDbxs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateDbxs">GoogleComputeImageShieldedInstanceInitialStateDbxs</a>[]

---

##### `keksInput`<sup>Optional</sup> <a name="keksInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.keksInput"></a>

```typescript
public readonly keksInput: IResolvable | GoogleComputeImageShieldedInstanceInitialStateKeks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateKeks">GoogleComputeImageShieldedInstanceInitialStateKeks</a>[]

---

##### `pkInput`<sup>Optional</sup> <a name="pkInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.pkInput"></a>

```typescript
public readonly pkInput: GoogleComputeImageShieldedInstanceInitialStatePk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageShieldedInstanceInitialState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialState">GoogleComputeImageShieldedInstanceInitialState</a>

---


### GoogleComputeImageShieldedInstanceInitialStatePkOutputReference <a name="GoogleComputeImageShieldedInstanceInitialStatePkOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.resetFileType"></a>

```typescript
public resetFileType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileTypeInput"></a>

```typescript
public readonly fileTypeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageShieldedInstanceInitialStatePk;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageShieldedInstanceInitialStatePk">GoogleComputeImageShieldedInstanceInitialStatePk</a>

---


### GoogleComputeImageSourceDiskEncryptionKeyOutputReference <a name="GoogleComputeImageSourceDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageSourceDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceDiskEncryptionKey">GoogleComputeImageSourceDiskEncryptionKey</a>

---


### GoogleComputeImageSourceImageEncryptionKeyOutputReference <a name="GoogleComputeImageSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceImageEncryptionKey">GoogleComputeImageSourceImageEncryptionKey</a>

---


### GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeImageSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageSourceSnapshotEncryptionKey">GoogleComputeImageSourceSnapshotEncryptionKey</a>

---


### GoogleComputeImageTimeoutsOutputReference <a name="GoogleComputeImageTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeImage } from '@cdktf/provider-google-beta'

new googleComputeImage.GoogleComputeImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeImage.GoogleComputeImageTimeouts">GoogleComputeImageTimeouts</a>

---



