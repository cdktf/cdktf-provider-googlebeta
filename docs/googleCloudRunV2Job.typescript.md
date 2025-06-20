# `googleCloudRunV2Job` Submodule <a name="`googleCloudRunV2Job` Submodule" id="@cdktf/provider-google-beta.googleCloudRunV2Job"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Job <a name="GoogleCloudRunV2Job" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job google_cloud_run_v2_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2Job(scope: Construct, id: string, config: GoogleCloudRunV2JobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig">GoogleCloudRunV2JobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig">GoogleCloudRunV2JobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClientVersion">resetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetRunExecutionToken">resetRunExecutionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetStartExecutionToken">resetStartExecutionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putBinaryAuthorization"></a>

```typescript
public putBinaryAuthorization(value: GoogleCloudRunV2JobBinaryAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTemplate"></a>

```typescript
public putTemplate(value: GoogleCloudRunV2JobTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudRunV2JobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetBinaryAuthorization"></a>

```typescript
public resetBinaryAuthorization(): void
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetClientVersion` <a name="resetClientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetClientVersion"></a>

```typescript
public resetClientVersion(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetLaunchStage"></a>

```typescript
public resetLaunchStage(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRunExecutionToken` <a name="resetRunExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetRunExecutionToken"></a>

```typescript
public resetRunExecutionToken(): void
```

##### `resetStartExecutionToken` <a name="resetStartExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetStartExecutionToken"></a>

```typescript
public resetStartExecutionToken(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudRunV2Job resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudRunV2Job resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudRunV2Job to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudRunV2Job that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Job to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference">GoogleCloudRunV2JobBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList">GoogleCloudRunV2JobConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.executionCount">executionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lastModifier">lastModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.latestCreatedExecution">latestCreatedExecution</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList">GoogleCloudRunV2JobLatestCreatedExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.observedGeneration">observedGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference">GoogleCloudRunV2JobTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terminalCondition">terminalCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList">GoogleCloudRunV2JobTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference">GoogleCloudRunV2JobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientInput">clientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersionInput">clientVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStageInput">launchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionTokenInput">runExecutionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionTokenInput">startExecutionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.client">client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStage">launchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionToken">runExecutionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionToken">startExecutionToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: GoogleCloudRunV2JobBinaryAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference">GoogleCloudRunV2JobBinaryAuthorizationOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.conditions"></a>

```typescript
public readonly conditions: GoogleCloudRunV2JobConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList">GoogleCloudRunV2JobConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `executionCount`<sup>Required</sup> <a name="executionCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.executionCount"></a>

```typescript
public readonly executionCount: number;
```

- *Type:* number

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `lastModifier`<sup>Required</sup> <a name="lastModifier" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.lastModifier"></a>

```typescript
public readonly lastModifier: string;
```

- *Type:* string

---

##### `latestCreatedExecution`<sup>Required</sup> <a name="latestCreatedExecution" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.latestCreatedExecution"></a>

```typescript
public readonly latestCreatedExecution: GoogleCloudRunV2JobLatestCreatedExecutionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList">GoogleCloudRunV2JobLatestCreatedExecutionList</a>

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.observedGeneration"></a>

```typescript
public readonly observedGeneration: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.template"></a>

```typescript
public readonly template: GoogleCloudRunV2JobTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference">GoogleCloudRunV2JobTemplateOutputReference</a>

---

##### `terminalCondition`<sup>Required</sup> <a name="terminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terminalCondition"></a>

```typescript
public readonly terminalCondition: GoogleCloudRunV2JobTerminalConditionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList">GoogleCloudRunV2JobTerminalConditionList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudRunV2JobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference">GoogleCloudRunV2JobTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.binaryAuthorizationInput"></a>

```typescript
public readonly binaryAuthorizationInput: GoogleCloudRunV2JobBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientInput"></a>

```typescript
public readonly clientInput: string;
```

- *Type:* string

---

##### `clientVersionInput`<sup>Optional</sup> <a name="clientVersionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersionInput"></a>

```typescript
public readonly clientVersionInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStageInput"></a>

```typescript
public readonly launchStageInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runExecutionTokenInput`<sup>Optional</sup> <a name="runExecutionTokenInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionTokenInput"></a>

```typescript
public readonly runExecutionTokenInput: string;
```

- *Type:* string

---

##### `startExecutionTokenInput`<sup>Optional</sup> <a name="startExecutionTokenInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionTokenInput"></a>

```typescript
public readonly startExecutionTokenInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.templateInput"></a>

```typescript
public readonly templateInput: GoogleCloudRunV2JobTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudRunV2JobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runExecutionToken`<sup>Required</sup> <a name="runExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.runExecutionToken"></a>

```typescript
public readonly runExecutionToken: string;
```

- *Type:* string

---

##### `startExecutionToken`<sup>Required</sup> <a name="startExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.startExecutionToken"></a>

```typescript
public readonly startExecutionToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2Job.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2JobBinaryAuthorization <a name="GoogleCloudRunV2JobBinaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobBinaryAuthorization: googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.policy">policy</a></code> | <code>string</code> | The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `breakglassJustification`<sup>Optional</sup> <a name="breakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#breakglass_justification GoogleCloudRunV2Job#breakglass_justification}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#policy GoogleCloudRunV2Job#policy}

---

##### `useDefault`<sup>Optional</sup> <a name="useDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#use_default GoogleCloudRunV2Job#use_default}

---

### GoogleCloudRunV2JobConditions <a name="GoogleCloudRunV2JobConditions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobConditions: googleCloudRunV2Job.GoogleCloudRunV2JobConditions = { ... }
```


### GoogleCloudRunV2JobConfig <a name="GoogleCloudRunV2JobConfig" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobConfig: googleCloudRunV2Job.GoogleCloudRunV2JobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.location">location</a></code> | <code>string</code> | The location of the cloud run job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.name">name</a></code> | <code>string</code> | Name of the Job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.client">client</a></code> | <code>string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.clientVersion">clientVersion</a></code> | <code>string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#id GoogleCloudRunV2Job#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.launchStage">launchStage</a></code> | <code>string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#project GoogleCloudRunV2Job#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.runExecutionToken">runExecutionToken</a></code> | <code>string</code> | A unique string used as a suffix creating a new execution upon job create or update. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.startExecutionToken">startExecutionToken</a></code> | <code>string</code> | A unique string used as a suffix creating a new execution upon job create or update. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the cloud run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#location GoogleCloudRunV2Job#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.template"></a>

```typescript
public readonly template: GoogleCloudRunV2JobTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#template GoogleCloudRunV2Job#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.

This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#annotations GoogleCloudRunV2Job#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: GoogleCloudRunV2JobBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#binary_authorization GoogleCloudRunV2Job#binary_authorization}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.client"></a>

```typescript
public readonly client: string;
```

- *Type:* string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#client GoogleCloudRunV2Job#client}

---

##### `clientVersion`<sup>Optional</sup> <a name="clientVersion" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#client_version GoogleCloudRunV2Job#client_version}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the job.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the job,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the job will fail.
When the field is set to false, deleting the job is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#deletion_protection GoogleCloudRunV2Job#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#id GoogleCloudRunV2Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#labels GoogleCloudRunV2Job#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.launchStage"></a>

```typescript
public readonly launchStage: string;
```

- *Type:* string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.

For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#launch_stage GoogleCloudRunV2Job#launch_stage}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#project GoogleCloudRunV2Job#project}.

---

##### `runExecutionToken`<sup>Optional</sup> <a name="runExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.runExecutionToken"></a>

```typescript
public readonly runExecutionToken: string;
```

- *Type:* string

A unique string used as a suffix creating a new execution upon job create or update.

The Job will become ready when the execution is successfully completed.
The sum of job name and token length must be fewer than 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#run_execution_token GoogleCloudRunV2Job#run_execution_token}

---

##### `startExecutionToken`<sup>Optional</sup> <a name="startExecutionToken" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.startExecutionToken"></a>

```typescript
public readonly startExecutionToken: string;
```

- *Type:* string

A unique string used as a suffix creating a new execution upon job create or update.

The Job will become ready when the execution is successfully started.
The sum of job name and token length must be fewer than 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#start_execution_token GoogleCloudRunV2Job#start_execution_token}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudRunV2JobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#timeouts GoogleCloudRunV2Job#timeouts}

---

### GoogleCloudRunV2JobLatestCreatedExecution <a name="GoogleCloudRunV2JobLatestCreatedExecution" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobLatestCreatedExecution: googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution = { ... }
```


### GoogleCloudRunV2JobTemplate <a name="GoogleCloudRunV2JobTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplate: googleCloudRunV2Job.GoogleCloudRunV2JobTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.parallelism">parallelism</a></code> | <code>number</code> | Specifies the maximum desired number of tasks the execution should run at given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.taskCount">taskCount</a></code> | <code>number</code> | Specifies the desired number of tasks the execution should run. |

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.template"></a>

```typescript
public readonly template: GoogleCloudRunV2JobTemplateTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#template GoogleCloudRunV2Job#template}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.

This field follows Kubernetes annotations' namespacing, limits, and rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#annotations GoogleCloudRunV2Job#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter,
or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or
https://cloud.google.com/run/docs/configuring/labels.

Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#labels GoogleCloudRunV2Job#labels}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Specifies the maximum desired number of tasks the execution should run at given time.

Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#parallelism GoogleCloudRunV2Job#parallelism}

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

Specifies the desired number of tasks the execution should run.

Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#task_count GoogleCloudRunV2Job#task_count}

---

### GoogleCloudRunV2JobTemplateTemplate <a name="GoogleCloudRunV2JobTemplateTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplate: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.containers">containers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.executionEnvironment">executionEnvironment</a></code> | <code>string</code> | The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.maxRetries">maxRetries</a></code> | <code>number</code> | Number of retries allowed per Task, before marking this Task failed. Defaults to 3. Minimum value is 0. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Email address of the IAM service account associated with the Task of a Job. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.timeout">timeout</a></code> | <code>string</code> | Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]</code> | volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.containers"></a>

```typescript
public readonly containers: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#containers GoogleCloudRunV2Job#containers}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#encryption_key GoogleCloudRunV2Job#encryption_key}

---

##### `executionEnvironment`<sup>Optional</sup> <a name="executionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.executionEnvironment"></a>

```typescript
public readonly executionEnvironment: string;
```

- *Type:* string

The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#execution_environment GoogleCloudRunV2Job#execution_environment}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Number of retries allowed per Task, before marking this Task failed. Defaults to 3. Minimum value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#max_retries GoogleCloudRunV2Job#max_retries}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Email address of the IAM service account associated with the Task of a Job.

The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#service_account GoogleCloudRunV2Job#service_account}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers.

This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#timeout GoogleCloudRunV2Job#timeout}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#volumes GoogleCloudRunV2Job#volumes}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: GoogleCloudRunV2JobTemplateTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#vpc_access GoogleCloudRunV2Job#vpc_access}

---

### GoogleCloudRunV2JobTemplateTemplateContainers <a name="GoogleCloudRunV2JobTemplateTemplateContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainers: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.image">image</a></code> | <code>string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.args">args</a></code> | <code>string[]</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.command">command</a></code> | <code>string[]</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | Names of the containers that must start before this container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.name">name</a></code> | <code>string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.workingDir">workingDir</a></code> | <code>string</code> | Container's working directory. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#image GoogleCloudRunV2Job#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#args GoogleCloudRunV2Job#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#command GoogleCloudRunV2Job#command}

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

Names of the containers that must start before this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#depends_on GoogleCloudRunV2Job#depends_on}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.env"></a>

```typescript
public readonly env: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#env GoogleCloudRunV2Job#env}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.ports"></a>

```typescript
public readonly ports: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#ports GoogleCloudRunV2Job#ports}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.resources"></a>

```typescript
public readonly resources: GoogleCloudRunV2JobTemplateTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#resources GoogleCloudRunV2Job#resources}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.startupProbe"></a>

```typescript
public readonly startupProbe: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#startup_probe GoogleCloudRunV2Job#startup_probe}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#volume_mounts GoogleCloudRunV2Job#volume_mounts}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#working_dir GoogleCloudRunV2Job#working_dir}

---

### GoogleCloudRunV2JobTemplateTemplateContainersEnv <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersEnv: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.value">value</a></code> | <code>string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#value GoogleCloudRunV2Job#value}

---

##### `valueSource`<sup>Optional</sup> <a name="valueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv.property.valueSource"></a>

```typescript
public readonly valueSource: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#value_source GoogleCloudRunV2Job#value_source}

---

### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersEnvValueSource: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#secret_key_ref GoogleCloudRunV2Job#secret_key_ref}

---

### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#version GoogleCloudRunV2Job#version}

---

### GoogleCloudRunV2JobTemplateTemplateContainersPorts <a name="GoogleCloudRunV2JobTemplateTemplateContainersPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersPorts: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.containerPort">containerPort</a></code> | <code>number</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.name">name</a></code> | <code>string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#container_port GoogleCloudRunV2Job#container_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

### GoogleCloudRunV2JobTemplateTemplateContainersResources <a name="GoogleCloudRunV2JobTemplateTemplateContainersResources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersResources: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Only memory and CPU are supported. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only memory and CPU are supported.

Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#limits GoogleCloudRunV2Job#limits}

---

### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersStartupProbe: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Number of seconds after which the probe times out. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#failure_threshold GoogleCloudRunV2Job#failure_threshold}

---

##### `grpc`<sup>Optional</sup> <a name="grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.grpc"></a>

```typescript
public readonly grpc: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#grpc GoogleCloudRunV2Job#grpc}

---

##### `httpGet`<sup>Optional</sup> <a name="httpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.httpGet"></a>

```typescript
public readonly httpGet: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#http_get GoogleCloudRunV2Job#http_get}

---

##### `initialDelaySeconds`<sup>Optional</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#initial_delay_seconds GoogleCloudRunV2Job#initial_delay_seconds}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#period_seconds GoogleCloudRunV2Job#period_seconds}

---

##### `tcpSocket`<sup>Optional</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#tcp_socket GoogleCloudRunV2Job#tcp_socket}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than periodSeconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#timeout_seconds GoogleCloudRunV2Job#timeout_seconds}

---

### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc.property.service">service</a></code> | <code>string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#port GoogleCloudRunV2Job#port}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#service GoogleCloudRunV2Job#service}

---

### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.httpHeaders">httpHeaders</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.path">path</a></code> | <code>string</code> | Path to access on the HTTP server. If set, it should not be empty string. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#http_headers GoogleCloudRunV2Job#http_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to access on the HTTP server. If set, it should not be empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#port GoogleCloudRunV2Job#port}

---

### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">name</a></code> | <code>string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">value</a></code> | <code>string</code> | The header field value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#value GoogleCloudRunV2Job#value}

---

### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket.property.port">port</a></code> | <code>number</code> | Port number to access on the container. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#port GoogleCloudRunV2Job#port}

---

### GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts <a name="GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateContainersVolumeMounts: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | This must match the Name of a Volume. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#mount_path GoogleCloudRunV2Job#mount_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

### GoogleCloudRunV2JobTemplateTemplateVolumes <a name="GoogleCloudRunV2JobTemplateTemplateVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumes: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.name">name</a></code> | <code>string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a></code> | secret block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}

---

##### `cloudSqlInstance`<sup>Optional</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#cloud_sql_instance GoogleCloudRunV2Job#cloud_sql_instance}

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.emptyDir"></a>

```typescript
public readonly emptyDir: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#empty_dir GoogleCloudRunV2Job#empty_dir}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.gcs"></a>

```typescript
public readonly gcs: GoogleCloudRunV2JobTemplateTemplateVolumesGcs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#gcs GoogleCloudRunV2Job#gcs}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.nfs"></a>

```typescript
public readonly nfs: GoogleCloudRunV2JobTemplateTemplateVolumesNfs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#nfs GoogleCloudRunV2Job#nfs}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes.property.secret"></a>

```typescript
public readonly secret: GoogleCloudRunV2JobTemplateTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance <a name="GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances">instances</a></code> | <code>string[]</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#instances GoogleCloudRunV2Job#instances}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir <a name="GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumesEmptyDir: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.medium">medium</a></code> | <code>string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#medium GoogleCloudRunV2Job#medium}

---

##### `sizeLimit`<sup>Optional</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#size_limit GoogleCloudRunV2Job#size_limit}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesGcs <a name="GoogleCloudRunV2JobTemplateTemplateVolumesGcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumesGcs: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.bucket">bucket</a></code> | <code>string</code> | Name of the cloud storage bucket to back the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, mount this volume as read-only in all mounts. If false, mount this volume as read-write. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Name of the cloud storage bucket to back the volume.

The resource service account must have permission to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#bucket GoogleCloudRunV2Job#bucket}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#mount_options GoogleCloudRunV2Job#mount_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, mount this volume as read-only in all mounts. If false, mount this volume as read-write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#read_only GoogleCloudRunV2Job#read_only}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesNfs <a name="GoogleCloudRunV2JobTemplateTemplateVolumesNfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumesNfs: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.server">server</a></code> | <code>string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.path">path</a></code> | <code>string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, mount this volume as read-only in all mounts. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#server GoogleCloudRunV2Job#server}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, mount this volume as read-only in all mounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#read_only GoogleCloudRunV2Job#read_only}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesSecret <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumesSecret: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.secret">secret</a></code> | <code>string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode">defaultMode</a></code> | <code>number</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]</code> | items block. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}

---

##### `defaultMode`<sup>Optional</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#default_mode GoogleCloudRunV2Job#default_mode}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret.property.items"></a>

```typescript
public readonly items: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#items GoogleCloudRunV2Job#items}

---

### GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVolumesSecretItems: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.path">path</a></code> | <code>string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.version">version</a></code> | <code>string</code> | The Cloud Secret Manager secret version. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode">mode</a></code> | <code>number</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#version GoogleCloudRunV2Job#version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#mode GoogleCloudRunV2Job#mode}

---

### GoogleCloudRunV2JobTemplateTemplateVpcAccess <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVpcAccess: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.connector">connector</a></code> | <code>string</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.egress">egress</a></code> | <code>string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.networkInterfaces">networkInterfaces</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]</code> | network_interfaces block. |

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#connector GoogleCloudRunV2Job#connector}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#egress GoogleCloudRunV2Job#egress}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IResolvable | GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#network_interfaces GoogleCloudRunV2Job#network_interfaces}

---

### GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces: googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.network">network</a></code> | <code>string</code> | The VPC network that the Cloud Run resource will be able to send traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.subnetwork">subnetwork</a></code> | <code>string</code> | The VPC subnetwork that the Cloud Run resource will get IPs from. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.tags">tags</a></code> | <code>string[]</code> | Network tags applied to this Cloud Run job. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The VPC network that the Cloud Run resource will be able to send traffic to.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
looked up from the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#network GoogleCloudRunV2Job#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The VPC subnetwork that the Cloud Run resource will get IPs from.

At least one of network or subnetwork must be specified. If both
network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
subnetwork with the same name with the network will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#subnetwork GoogleCloudRunV2Job#subnetwork}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Network tags applied to this Cloud Run job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#tags GoogleCloudRunV2Job#tags}

---

### GoogleCloudRunV2JobTerminalCondition <a name="GoogleCloudRunV2JobTerminalCondition" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTerminalCondition: googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition = { ... }
```


### GoogleCloudRunV2JobTimeouts <a name="GoogleCloudRunV2JobTimeouts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

const googleCloudRunV2JobTimeouts: googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#create GoogleCloudRunV2Job#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#delete GoogleCloudRunV2Job#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#update GoogleCloudRunV2Job#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#create GoogleCloudRunV2Job#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#delete GoogleCloudRunV2Job#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_cloud_run_v2_job#update GoogleCloudRunV2Job#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2JobBinaryAuthorizationOutputReference <a name="GoogleCloudRunV2JobBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification">resetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault">resetUseDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBreakglassJustification` <a name="resetBreakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```typescript
public resetBreakglassJustification(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetUseDefault` <a name="resetUseDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.resetUseDefault"></a>

```typescript
public resetUseDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput">breakglassJustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput">useDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification">breakglassJustification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `breakglassJustificationInput`<sup>Optional</sup> <a name="breakglassJustificationInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```typescript
public readonly breakglassJustificationInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `useDefaultInput`<sup>Optional</sup> <a name="useDefaultInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```typescript
public readonly useDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `breakglassJustification`<sup>Required</sup> <a name="breakglassJustification" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```typescript
public readonly breakglassJustification: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobBinaryAuthorization">GoogleCloudRunV2JobBinaryAuthorization</a>

---


### GoogleCloudRunV2JobConditionsList <a name="GoogleCloudRunV2JobConditionsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudRunV2JobConditionsOutputReference <a name="GoogleCloudRunV2JobConditionsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions">GoogleCloudRunV2JobConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobConditions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobConditions">GoogleCloudRunV2JobConditions</a>

---


### GoogleCloudRunV2JobLatestCreatedExecutionList <a name="GoogleCloudRunV2JobLatestCreatedExecutionList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobLatestCreatedExecutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudRunV2JobLatestCreatedExecutionOutputReference <a name="GoogleCloudRunV2JobLatestCreatedExecutionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime">completionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution">GoogleCloudRunV2JobLatestCreatedExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completionTime`<sup>Required</sup> <a name="completionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.completionTime"></a>

```typescript
public readonly completionTime: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobLatestCreatedExecution;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobLatestCreatedExecution">GoogleCloudRunV2JobLatestCreatedExecution</a>

---


### GoogleCloudRunV2JobTemplateOutputReference <a name="GoogleCloudRunV2JobTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.putTemplate"></a>

```typescript
public putTemplate(value: GoogleCloudRunV2JobTemplateTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.resetTaskCount"></a>

```typescript
public resetTaskCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference">GoogleCloudRunV2JobTemplateTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.template"></a>

```typescript
public readonly template: GoogleCloudRunV2JobTemplateTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference">GoogleCloudRunV2JobTemplateTemplateOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCountInput"></a>

```typescript
public readonly taskCountInput: number;
```

- *Type:* number

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: GoogleCloudRunV2JobTemplateTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplate">GoogleCloudRunV2JobTemplate</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvList <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource">putValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource">resetValueSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueSource` <a name="putValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource"></a>

```typescript
public putValueSource(value: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueSource` <a name="resetValueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.resetValueSource"></a>

```typescript
public resetValueSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource">valueSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```typescript
public readonly valueSourceInput: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersList <a name="GoogleCloudRunV2JobTemplateTemplateContainersList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateContainersOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putResources"></a>

```typescript
public putResources(value: GoogleCloudRunV2JobTemplateTemplateContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putStartupProbe"></a>

```typescript
public putStartupProbe(value: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDependsOn` <a name="resetDependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetStartupProbe"></a>

```typescript
public resetStartupProbe(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList">GoogleCloudRunV2JobTemplateTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList">GoogleCloudRunV2JobTemplateTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.env"></a>

```typescript
public readonly env: GoogleCloudRunV2JobTemplateTemplateContainersEnvList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnvList">GoogleCloudRunV2JobTemplateTemplateContainersEnvList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.ports"></a>

```typescript
public readonly ports: GoogleCloudRunV2JobTemplateTemplateContainersPortsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList">GoogleCloudRunV2JobTemplateTemplateContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbe"></a>

```typescript
public readonly startupProbe: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersEnv">GoogleCloudRunV2JobTemplateTemplateContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: GoogleCloudRunV2JobTemplateTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.startupProbeInput"></a>

```typescript
public readonly startupProbeInput: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersPortsList <a name="GoogleCloudRunV2JobTemplateTemplateContainersPortsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetContainerPort"></a>

```typescript
public resetContainerPort(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```typescript
public readonly containerPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersPorts">GoogleCloudRunV2JobTemplateTemplateContainersPorts</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersResources">GoogleCloudRunV2JobTemplateTemplateContainersResources</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">putHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpHeaders` <a name="putHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```typescript
public putHttpHeaders(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putGrpc">putGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putHttpGet">putHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putTcpSocket">putTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetGrpc">resetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetHttpGet">resetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">resetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTcpSocket">resetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpc` <a name="putGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putGrpc"></a>

```typescript
public putGrpc(value: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a>

---

##### `putHttpGet` <a name="putHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```typescript
public putHttpGet(value: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

---

##### `putTcpSocket` <a name="putTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```typescript
public putTcpSocket(value: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

---

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetGrpc` <a name="resetGrpc" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetGrpc"></a>

```typescript
public resetGrpc(): void
```

##### `resetHttpGet` <a name="resetHttpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```typescript
public resetHttpGet(): void
```

##### `resetInitialDelaySeconds` <a name="resetInitialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```typescript
public resetInitialDelaySeconds(): void
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```typescript
public resetPeriodSeconds(): void
```

##### `resetTcpSocket` <a name="resetTcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```typescript
public resetTcpSocket(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.grpcInput">grpcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGetInput">httpGetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">initialDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">tcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```typescript
public readonly grpc: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpcOutputReference</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```typescript
public readonly httpGet: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```typescript
public readonly tcpSocket: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `grpcInput`<sup>Optional</sup> <a name="grpcInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.grpcInput"></a>

```typescript
public readonly grpcInput: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeGrpc</a>

---

##### `httpGetInput`<sup>Optional</sup> <a name="httpGetInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```typescript
public readonly httpGetInput: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet</a>

---

##### `initialDelaySecondsInput`<sup>Optional</sup> <a name="initialDelaySecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```typescript
public readonly initialDelaySecondsInput: number;
```

- *Type:* number

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```typescript
public readonly periodSecondsInput: number;
```

- *Type:* number

---

##### `tcpSocketInput`<sup>Optional</sup> <a name="tcpSocketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```typescript
public readonly tcpSocketInput: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```typescript
public readonly initialDelaySeconds: number;
```

- *Type:* number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```typescript
public readonly periodSeconds: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbe</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket">GoogleCloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList <a name="GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts">GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts</a>

---


### GoogleCloudRunV2JobTemplateTemplateOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment">resetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putContainers"></a>

```typescript
public putContainers(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVpcAccess"></a>

```typescript
public putVpcAccess(value: GoogleCloudRunV2JobTemplateTemplateVpcAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetExecutionEnvironment` <a name="resetExecutionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetExecutionEnvironment"></a>

```typescript
public resetExecutionEnvironment(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.resetVpcAccess"></a>

```typescript
public resetVpcAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList">GoogleCloudRunV2JobTemplateTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList">GoogleCloudRunV2JobTemplateTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference">GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containersInput">containersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput">executionEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment">executionEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containers"></a>

```typescript
public readonly containers: GoogleCloudRunV2JobTemplateTemplateContainersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainersList">GoogleCloudRunV2JobTemplateTemplateContainersList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumes"></a>

```typescript
public readonly volumes: GoogleCloudRunV2JobTemplateTemplateVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList">GoogleCloudRunV2JobTemplateTemplateVolumesList</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccess"></a>

```typescript
public readonly vpcAccess: GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference">GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateContainers">GoogleCloudRunV2JobTemplateTemplateContainers</a>[]

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `executionEnvironmentInput`<sup>Optional</sup> <a name="executionEnvironmentInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironmentInput"></a>

```typescript
public readonly executionEnvironmentInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.vpcAccessInput"></a>

```typescript
public readonly vpcAccessInput: GoogleCloudRunV2JobTemplateTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `executionEnvironment`<sup>Required</sup> <a name="executionEnvironment" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.executionEnvironment"></a>

```typescript
public readonly executionEnvironment: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplate;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplate">GoogleCloudRunV2JobTemplateTemplate</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">resetInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">instancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: string[];
```

- *Type:* string[]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetSizeLimit">resetSizeLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetMedium"></a>

```typescript
public resetMedium(): void
```

##### `resetSizeLimit` <a name="resetSizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```typescript
public resetSizeLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.mediumInput"></a>

```typescript
public readonly mediumInput: string;
```

- *Type:* string

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```typescript
public readonly sizeLimitInput: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateVolumesGcs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesList <a name="GoogleCloudRunV2JobTemplateTemplateVolumesList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.serverInput">serverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.server">server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.serverInput"></a>

```typescript
public readonly serverInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.server"></a>

```typescript
public readonly server: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateVolumesNfs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance">putCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance">resetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudSqlInstance` <a name="putCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```typescript
public putCloudSqlInstance(value: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putEmptyDir"></a>

```typescript
public putEmptyDir(value: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

---

##### `putGcs` <a name="putGcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putGcs"></a>

```typescript
public putGcs(value: GoogleCloudRunV2JobTemplateTemplateVolumesGcs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

---

##### `putNfs` <a name="putNfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putNfs"></a>

```typescript
public putNfs(value: GoogleCloudRunV2JobTemplateTemplateVolumesNfs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret"></a>

```typescript
public putSecret(value: GoogleCloudRunV2JobTemplateTemplateVolumesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `resetCloudSqlInstance` <a name="resetCloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```typescript
public resetCloudSqlInstance(): void
```

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetEmptyDir"></a>

```typescript
public resetEmptyDir(): void
```

##### `resetGcs` <a name="resetGcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetGcs"></a>

```typescript
public resetGcs(): void
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetNfs"></a>

```typescript
public resetNfs(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance">cloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput">cloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSqlInstance`<sup>Required</sup> <a name="cloudSqlInstance" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```typescript
public readonly cloudSqlInstance: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcs"></a>

```typescript
public readonly gcs: GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfs"></a>

```typescript
public readonly nfs: GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference">GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference</a>

---

##### `cloudSqlInstanceInput`<sup>Optional</sup> <a name="cloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```typescript
public readonly cloudSqlInstanceInput: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance">GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.emptyDirInput"></a>

```typescript
public readonly emptyDirInput: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir">GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.gcsInput"></a>

```typescript
public readonly gcsInput: GoogleCloudRunV2JobTemplateTemplateVolumesGcs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesGcs">GoogleCloudRunV2JobTemplateTemplateVolumesGcs</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.nfsInput"></a>

```typescript
public readonly nfsInput: GoogleCloudRunV2JobTemplateTemplateVolumesNfs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesNfs">GoogleCloudRunV2JobTemplateTemplateVolumesNfs</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: GoogleCloudRunV2JobTemplateTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumes">GoogleCloudRunV2JobTemplateTemplateVolumes</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>

---


### GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode">resetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

---

##### `resetDefaultMode` <a name="resetDefaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```typescript
public resetDefaultMode(): void
```

##### `resetItems` <a name="resetItems" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput">defaultModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.items"></a>

```typescript
public readonly items: GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList</a>

---

##### `defaultModeInput`<sup>Optional</sup> <a name="defaultModeInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```typescript
public readonly defaultModeInput: number;
```

- *Type:* number

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems">GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems</a>[]

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```typescript
public readonly defaultMode: number;
```

- *Type:* number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVolumesSecret">GoogleCloudRunV2JobTemplateTemplateVolumesSecret</a>

---


### GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]

---


### GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>

---


### GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference <a name="GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector">resetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces"></a>

```typescript
public putNetworkInterfaces(value: IResolvable | GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]

---

##### `resetConnector` <a name="resetConnector" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetConnector"></a>

```typescript
public resetConnector(): void
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.resetNetworkInterfaces"></a>

```typescript
public resetNetworkInterfaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput">connectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput">egressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector">connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress">egress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList</a>

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connectorInput"></a>

```typescript
public readonly connectorInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: string;
```

- *Type:* string

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.networkInterfacesInput"></a>

```typescript
public readonly networkInterfacesInput: IResolvable | GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces">GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces</a>[]

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.connector"></a>

```typescript
public readonly connector: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.egress"></a>

```typescript
public readonly egress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTemplateTemplateVpcAccess;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTemplateTemplateVpcAccess">GoogleCloudRunV2JobTemplateTemplateVpcAccess</a>

---


### GoogleCloudRunV2JobTerminalConditionList <a name="GoogleCloudRunV2JobTerminalConditionList" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.get"></a>

```typescript
public get(index: number): GoogleCloudRunV2JobTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCloudRunV2JobTerminalConditionOutputReference <a name="GoogleCloudRunV2JobTerminalConditionOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.executionReason">executionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.revisionReason">revisionReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition">GoogleCloudRunV2JobTerminalCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionReason`<sup>Required</sup> <a name="executionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.executionReason"></a>

```typescript
public readonly executionReason: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revisionReason`<sup>Required</sup> <a name="revisionReason" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.revisionReason"></a>

```typescript
public readonly revisionReason: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudRunV2JobTerminalCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTerminalCondition">GoogleCloudRunV2JobTerminalCondition</a>

---


### GoogleCloudRunV2JobTimeoutsOutputReference <a name="GoogleCloudRunV2JobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudRunV2Job } from '@cdktf/provider-google-beta'

new googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudRunV2JobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudRunV2Job.GoogleCloudRunV2JobTimeouts">GoogleCloudRunV2JobTimeouts</a>

---



