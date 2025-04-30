# `googleStorageBatchOperationsJob` Submodule <a name="`googleStorageBatchOperationsJob` Submodule" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBatchOperationsJob <a name="GoogleStorageBatchOperationsJob" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob(scope: Construct, id: string, config?: GoogleStorageBatchOperationsJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig">GoogleStorageBatchOperationsJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig">GoogleStorageBatchOperationsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList">putBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject">putDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata">putPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold">putPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject">putRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetBucketList">resetBucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteObject">resetDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteProtection">resetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutMetadata">resetPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutObjectHold">resetPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetRewriteObject">resetRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBucketList` <a name="putBucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList"></a>

```typescript
public putBucketList(value: GoogleStorageBatchOperationsJobBucketListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putBucketList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---

##### `putDeleteObject` <a name="putDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject"></a>

```typescript
public putDeleteObject(value: GoogleStorageBatchOperationsJobDeleteObject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putDeleteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---

##### `putPutMetadata` <a name="putPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata"></a>

```typescript
public putPutMetadata(value: GoogleStorageBatchOperationsJobPutMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---

##### `putPutObjectHold` <a name="putPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold"></a>

```typescript
public putPutObjectHold(value: GoogleStorageBatchOperationsJobPutObjectHold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putPutObjectHold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---

##### `putRewriteObject` <a name="putRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject"></a>

```typescript
public putRewriteObject(value: GoogleStorageBatchOperationsJobRewriteObject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putRewriteObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageBatchOperationsJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---

##### `resetBucketList` <a name="resetBucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetBucketList"></a>

```typescript
public resetBucketList(): void
```

##### `resetDeleteObject` <a name="resetDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteObject"></a>

```typescript
public resetDeleteObject(): void
```

##### `resetDeleteProtection` <a name="resetDeleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetDeleteProtection"></a>

```typescript
public resetDeleteProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobId` <a name="resetJobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPutMetadata` <a name="resetPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutMetadata"></a>

```typescript
public resetPutMetadata(): void
```

##### `resetPutObjectHold` <a name="resetPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetPutObjectHold"></a>

```typescript
public resetPutObjectHold(): void
```

##### `resetRewriteObject` <a name="resetRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetRewriteObject"></a>

```typescript
public resetRewriteObject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleStorageBatchOperationsJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageBatchOperationsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference">GoogleStorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.completeTime">completeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference">GoogleStorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference">GoogleStorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference">GoogleStorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference">GoogleStorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.scheduleTime">scheduleTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference">GoogleStorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketListInput">bucketListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObjectInput">deleteObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtectionInput">deleteProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadataInput">putMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHoldInput">putObjectHoldInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObjectInput">rewriteObjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtection">deleteProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketList`<sup>Required</sup> <a name="bucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketList"></a>

```typescript
public readonly bucketList: GoogleStorageBatchOperationsJobBucketListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference">GoogleStorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `completeTime`<sup>Required</sup> <a name="completeTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.completeTime"></a>

```typescript
public readonly completeTime: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteObject`<sup>Required</sup> <a name="deleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObject"></a>

```typescript
public readonly deleteObject: GoogleStorageBatchOperationsJobDeleteObjectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference">GoogleStorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `putMetadata`<sup>Required</sup> <a name="putMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadata"></a>

```typescript
public readonly putMetadata: GoogleStorageBatchOperationsJobPutMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference">GoogleStorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `putObjectHold`<sup>Required</sup> <a name="putObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHold"></a>

```typescript
public readonly putObjectHold: GoogleStorageBatchOperationsJobPutObjectHoldOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference">GoogleStorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `rewriteObject`<sup>Required</sup> <a name="rewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObject"></a>

```typescript
public readonly rewriteObject: GoogleStorageBatchOperationsJobRewriteObjectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference">GoogleStorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `scheduleTime`<sup>Required</sup> <a name="scheduleTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.scheduleTime"></a>

```typescript
public readonly scheduleTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageBatchOperationsJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference">GoogleStorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `bucketListInput`<sup>Optional</sup> <a name="bucketListInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.bucketListInput"></a>

```typescript
public readonly bucketListInput: GoogleStorageBatchOperationsJobBucketListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---

##### `deleteObjectInput`<sup>Optional</sup> <a name="deleteObjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteObjectInput"></a>

```typescript
public readonly deleteObjectInput: GoogleStorageBatchOperationsJobDeleteObject;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---

##### `deleteProtectionInput`<sup>Optional</sup> <a name="deleteProtectionInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtectionInput"></a>

```typescript
public readonly deleteProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `putMetadataInput`<sup>Optional</sup> <a name="putMetadataInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putMetadataInput"></a>

```typescript
public readonly putMetadataInput: GoogleStorageBatchOperationsJobPutMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---

##### `putObjectHoldInput`<sup>Optional</sup> <a name="putObjectHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.putObjectHoldInput"></a>

```typescript
public readonly putObjectHoldInput: GoogleStorageBatchOperationsJobPutObjectHold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---

##### `rewriteObjectInput`<sup>Optional</sup> <a name="rewriteObjectInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.rewriteObjectInput"></a>

```typescript
public readonly rewriteObjectInput: GoogleStorageBatchOperationsJobRewriteObject;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageBatchOperationsJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBatchOperationsJobBucketListBuckets <a name="GoogleStorageBatchOperationsJobBucketListBuckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobBucketListBuckets: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.bucket">bucket</a></code> | <code>string</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.prefixList">prefixList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#bucket GoogleStorageBatchOperationsJob#bucket}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```typescript
public readonly manifest: GoogleStorageBatchOperationsJobBucketListBucketsManifest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#manifest GoogleStorageBatchOperationsJob#manifest}

---

##### `prefixList`<sup>Optional</sup> <a name="prefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```typescript
public readonly prefixList: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#prefix_list GoogleStorageBatchOperationsJob#prefix_list}

---

### GoogleStorageBatchOperationsJobBucketListBucketsManifest <a name="GoogleStorageBatchOperationsJobBucketListBucketsManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobBucketListBucketsManifest: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">manifestLocation</a></code> | <code>string</code> | Specifies objects in a manifest file. |

---

##### `manifestLocation`<sup>Optional</sup> <a name="manifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```typescript
public readonly manifestLocation: string;
```

- *Type:* string

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#manifest_location GoogleStorageBatchOperationsJob#manifest_location}

---

### GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobBucketListBucketsPrefixListStruct: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">includedObjectPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}. |

---

##### `includedObjectPrefixes`<sup>Optional</sup> <a name="includedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```typescript
public readonly includedObjectPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#included_object_prefixes GoogleStorageBatchOperationsJob#included_object_prefixes}.

---

### GoogleStorageBatchOperationsJobBucketListStruct <a name="GoogleStorageBatchOperationsJobBucketListStruct" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobBucketListStruct: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```typescript
public readonly buckets: GoogleStorageBatchOperationsJobBucketListBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#buckets GoogleStorageBatchOperationsJob#buckets}

---

### GoogleStorageBatchOperationsJobConfig <a name="GoogleStorageBatchOperationsJobConfig" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobConfig: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.bucketList">bucketList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteObject">deleteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteProtection">deleteProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.jobId">jobId</a></code> | <code>string</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putMetadata">putMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putObjectHold">putObjectHold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.rewriteObject">rewriteObject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketList`<sup>Optional</sup> <a name="bucketList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.bucketList"></a>

```typescript
public readonly bucketList: GoogleStorageBatchOperationsJobBucketListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#bucket_list GoogleStorageBatchOperationsJob#bucket_list}

---

##### `deleteObject`<sup>Optional</sup> <a name="deleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteObject"></a>

```typescript
public readonly deleteObject: GoogleStorageBatchOperationsJobDeleteObject;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#delete_object GoogleStorageBatchOperationsJob#delete_object}

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#delete_protection GoogleStorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#id GoogleStorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#job_id GoogleStorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#project GoogleStorageBatchOperationsJob#project}.

---

##### `putMetadata`<sup>Optional</sup> <a name="putMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putMetadata"></a>

```typescript
public readonly putMetadata: GoogleStorageBatchOperationsJobPutMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#put_metadata GoogleStorageBatchOperationsJob#put_metadata}

---

##### `putObjectHold`<sup>Optional</sup> <a name="putObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.putObjectHold"></a>

```typescript
public readonly putObjectHold: GoogleStorageBatchOperationsJobPutObjectHold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#put_object_hold GoogleStorageBatchOperationsJob#put_object_hold}

---

##### `rewriteObject`<sup>Optional</sup> <a name="rewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.rewriteObject"></a>

```typescript
public readonly rewriteObject: GoogleStorageBatchOperationsJobRewriteObject;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#rewrite_object GoogleStorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageBatchOperationsJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#timeouts GoogleStorageBatchOperationsJob#timeouts}

---

### GoogleStorageBatchOperationsJobDeleteObject <a name="GoogleStorageBatchOperationsJobDeleteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobDeleteObject: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">permanentObjectDeletionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `permanentObjectDeletionEnabled`<sup>Required</sup> <a name="permanentObjectDeletionEnabled" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```typescript
public readonly permanentObjectDeletionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#permanent_object_deletion_enabled GoogleStorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### GoogleStorageBatchOperationsJobPutMetadata <a name="GoogleStorageBatchOperationsJobPutMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobPutMetadata: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.cacheControl">cacheControl</a></code> | <code>string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Content Encoding of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentType">contentType</a></code> | <code>string</code> | Content-Type of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customTime">customTime</a></code> | <code>string</code> | Updates the objects fixed custom time metadata. |

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#cache_control GoogleStorageBatchOperationsJob#cache_control}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#content_disposition GoogleStorageBatchOperationsJob#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#content_encoding GoogleStorageBatchOperationsJob#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#content_language GoogleStorageBatchOperationsJob#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#content_type GoogleStorageBatchOperationsJob#content_type}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#custom_metadata GoogleStorageBatchOperationsJob#custom_metadata}

---

##### `customTime`<sup>Optional</sup> <a name="customTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata.property.customTime"></a>

```typescript
public readonly customTime: string;
```

- *Type:* string

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#custom_time GoogleStorageBatchOperationsJob#custom_time}

---

### GoogleStorageBatchOperationsJobPutObjectHold <a name="GoogleStorageBatchOperationsJobPutObjectHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobPutObjectHold: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.eventBasedHold">eventBasedHold</a></code> | <code>string</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.temporaryHold">temporaryHold</a></code> | <code>string</code> | set/unset to update temporary based hold for objects. |

---

##### `eventBasedHold`<sup>Optional</sup> <a name="eventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```typescript
public readonly eventBasedHold: string;
```

- *Type:* string

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#event_based_hold GoogleStorageBatchOperationsJob#event_based_hold}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: string;
```

- *Type:* string

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#temporary_hold GoogleStorageBatchOperationsJob#temporary_hold}

---

### GoogleStorageBatchOperationsJobRewriteObject <a name="GoogleStorageBatchOperationsJobRewriteObject" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobRewriteObject: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.property.kmsKey">kmsKey</a></code> | <code>string</code> | valid kms key. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#kms_key GoogleStorageBatchOperationsJob#kms_key}

---

### GoogleStorageBatchOperationsJobTimeouts <a name="GoogleStorageBatchOperationsJobTimeouts" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

const googleStorageBatchOperationsJobTimeouts: googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#create GoogleStorageBatchOperationsJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#delete GoogleStorageBatchOperationsJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_storage_batch_operations_job#update GoogleStorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">resetManifestLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManifestLocation` <a name="resetManifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```typescript
public resetManifestLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">manifestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">manifestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifestLocationInput`<sup>Optional</sup> <a name="manifestLocationInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```typescript
public readonly manifestLocationInput: string;
```

- *Type:* string

---

##### `manifestLocation`<sup>Required</sup> <a name="manifestLocation" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```typescript
public readonly manifestLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobBucketListBucketsManifest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---


### GoogleStorageBatchOperationsJobBucketListBucketsOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">putPrefixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">resetPrefixList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManifest` <a name="putManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```typescript
public putManifest(value: GoogleStorageBatchOperationsJobBucketListBucketsManifest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `putPrefixList` <a name="putPrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```typescript
public putPrefixList(value: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```typescript
public resetManifest(): void
```

##### `resetPrefixList` <a name="resetPrefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```typescript
public resetPrefixList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">prefixList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">manifestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">prefixListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```typescript
public readonly manifest: GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `prefixList`<sup>Required</sup> <a name="prefixList" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```typescript
public readonly prefixList: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```typescript
public readonly manifestInput: GoogleStorageBatchOperationsJobBucketListBucketsManifest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsManifest">GoogleStorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `prefixListInput`<sup>Optional</sup> <a name="prefixListInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```typescript
public readonly prefixListInput: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobBucketListBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---


### GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">resetIncludedObjectPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludedObjectPrefixes` <a name="resetIncludedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```typescript
public resetIncludedObjectPrefixes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">includedObjectPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">includedObjectPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedObjectPrefixesInput`<sup>Optional</sup> <a name="includedObjectPrefixesInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```typescript
public readonly includedObjectPrefixesInput: string[];
```

- *Type:* string[]

---

##### `includedObjectPrefixes`<sup>Required</sup> <a name="includedObjectPrefixes" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```typescript
public readonly includedObjectPrefixes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct">GoogleStorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### GoogleStorageBatchOperationsJobBucketListStructOutputReference <a name="GoogleStorageBatchOperationsJobBucketListStructOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets">putBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBuckets` <a name="putBuckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```typescript
public putBuckets(value: GoogleStorageBatchOperationsJobBucketListBuckets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">bucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```typescript
public readonly buckets: GoogleStorageBatchOperationsJobBucketListBucketsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBucketsOutputReference">GoogleStorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```typescript
public readonly bucketsInput: GoogleStorageBatchOperationsJobBucketListBuckets;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListBuckets">GoogleStorageBatchOperationsJobBucketListBuckets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobBucketListStruct;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobBucketListStruct">GoogleStorageBatchOperationsJobBucketListStruct</a>

---


### GoogleStorageBatchOperationsJobDeleteObjectOutputReference <a name="GoogleStorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">permanentObjectDeletionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">permanentObjectDeletionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permanentObjectDeletionEnabledInput`<sup>Optional</sup> <a name="permanentObjectDeletionEnabledInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```typescript
public readonly permanentObjectDeletionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permanentObjectDeletionEnabled`<sup>Required</sup> <a name="permanentObjectDeletionEnabled" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```typescript
public readonly permanentObjectDeletionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobDeleteObject;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobDeleteObject">GoogleStorageBatchOperationsJobDeleteObject</a>

---


### GoogleStorageBatchOperationsJobPutMetadataOutputReference <a name="GoogleStorageBatchOperationsJobPutMetadataOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">resetCustomTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```typescript
public resetCustomMetadata(): void
```

##### `resetCustomTime` <a name="resetCustomTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```typescript
public resetCustomTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">customMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">customTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">customMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTime">customTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```typescript
public readonly customMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customTimeInput`<sup>Optional</sup> <a name="customTimeInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```typescript
public readonly customTimeInput: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```typescript
public readonly customMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customTime`<sup>Required</sup> <a name="customTime" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```typescript
public readonly customTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobPutMetadata;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutMetadata">GoogleStorageBatchOperationsJobPutMetadata</a>

---


### GoogleStorageBatchOperationsJobPutObjectHoldOutputReference <a name="GoogleStorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">resetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventBasedHold` <a name="resetEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```typescript
public resetEventBasedHold(): void
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```typescript
public resetTemporaryHold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">eventBasedHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">eventBasedHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">temporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventBasedHoldInput`<sup>Optional</sup> <a name="eventBasedHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```typescript
public readonly eventBasedHoldInput: string;
```

- *Type:* string

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```typescript
public readonly temporaryHoldInput: string;
```

- *Type:* string

---

##### `eventBasedHold`<sup>Required</sup> <a name="eventBasedHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```typescript
public readonly eventBasedHold: string;
```

- *Type:* string

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobPutObjectHold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobPutObjectHold">GoogleStorageBatchOperationsJobPutObjectHold</a>

---


### GoogleStorageBatchOperationsJobRewriteObjectOutputReference <a name="GoogleStorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageBatchOperationsJobRewriteObject;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobRewriteObject">GoogleStorageBatchOperationsJobRewriteObject</a>

---


### GoogleStorageBatchOperationsJobTimeoutsOutputReference <a name="GoogleStorageBatchOperationsJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageBatchOperationsJob } from '@cdktf/provider-google-beta'

new googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageBatchOperationsJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageBatchOperationsJob.GoogleStorageBatchOperationsJobTimeouts">GoogleStorageBatchOperationsJobTimeouts</a>

---



