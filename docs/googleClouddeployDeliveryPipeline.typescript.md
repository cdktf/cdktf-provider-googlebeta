# `googleClouddeployDeliveryPipeline` Submodule <a name="`googleClouddeployDeliveryPipeline` Submodule" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployDeliveryPipeline <a name="GoogleClouddeployDeliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline(scope: Construct, id: string, config: GoogleClouddeployDeliveryPipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig">GoogleClouddeployDeliveryPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig">GoogleClouddeployDeliveryPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.putSerialPipeline">putSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetSerialPipeline">resetSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSerialPipeline` <a name="putSerialPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.putSerialPipeline"></a>

```typescript
public putSerialPipeline(value: GoogleClouddeployDeliveryPipelineSerialPipeline): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.putSerialPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleClouddeployDeliveryPipelineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSerialPipeline` <a name="resetSerialPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetSerialPipeline"></a>

```typescript
public resetSerialPipeline(): void
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetSuspended"></a>

```typescript
public resetSuspended(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployDeliveryPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isConstruct"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformElement"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformResource"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleClouddeployDeliveryPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployDeliveryPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployDeliveryPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployDeliveryPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList">GoogleClouddeployDeliveryPipelineConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.serialPipeline">serialPipeline</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference">GoogleClouddeployDeliveryPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.serialPipelineInput">serialPipelineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.suspendedInput">suspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.condition"></a>

```typescript
public readonly condition: GoogleClouddeployDeliveryPipelineConditionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList">GoogleClouddeployDeliveryPipelineConditionList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `serialPipeline`<sup>Required</sup> <a name="serialPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.serialPipeline"></a>

```typescript
public readonly serialPipeline: GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployDeliveryPipelineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference">GoogleClouddeployDeliveryPipelineTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serialPipelineInput`<sup>Optional</sup> <a name="serialPipelineInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.serialPipelineInput"></a>

```typescript
public readonly serialPipelineInput: GoogleClouddeployDeliveryPipelineSerialPipeline;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.suspendedInput"></a>

```typescript
public readonly suspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleClouddeployDeliveryPipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployDeliveryPipelineCondition <a name="GoogleClouddeployDeliveryPipelineCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineCondition.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineCondition: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineCondition = { ... }
```


### GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition <a name="GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineConditionPipelineReadyCondition: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition = { ... }
```


### GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition <a name="GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineConditionTargetsPresentCondition: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition = { ... }
```


### GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition <a name="GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineConditionTargetsTypeCondition: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition = { ... }
```


### GoogleClouddeployDeliveryPipelineConfig <a name="GoogleClouddeployDeliveryPipelineConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineConfig: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.name">name</a></code> | <code>string</code> | Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.description">description</a></code> | <code>string</code> | Description of the `DeliveryPipeline`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.serialPipeline">serialPipeline</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a></code> | serial_pipeline block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | When suspended, no new releases or rollouts can be created, but in-progress ones will complete. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#location GoogleClouddeployDeliveryPipeline#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the `DeliveryPipeline`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#name GoogleClouddeployDeliveryPipeline#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User annotations.

These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#annotations GoogleClouddeployDeliveryPipeline#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the `DeliveryPipeline`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#description GoogleClouddeployDeliveryPipeline#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#id GoogleClouddeployDeliveryPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#labels GoogleClouddeployDeliveryPipeline#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#project GoogleClouddeployDeliveryPipeline#project}

---

##### `serialPipeline`<sup>Optional</sup> <a name="serialPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.serialPipeline"></a>

```typescript
public readonly serialPipeline: GoogleClouddeployDeliveryPipelineSerialPipeline;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a>

serial_pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#serial_pipeline GoogleClouddeployDeliveryPipeline#serial_pipeline}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When suspended, no new releases or rollouts can be created, but in-progress ones will complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#suspended GoogleClouddeployDeliveryPipeline#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployDeliveryPipelineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#timeouts GoogleClouddeployDeliveryPipeline#timeouts}

---

### GoogleClouddeployDeliveryPipelineSerialPipeline <a name="GoogleClouddeployDeliveryPipelineSerialPipeline" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipeline: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline.property.stages">stages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]</code> | stages block. |

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline.property.stages"></a>

```typescript
public readonly stages: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#stages GoogleClouddeployDeliveryPipeline#stages}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStages <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStages: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.deployParameters">deployParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]</code> | deploy_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.profiles">profiles</a></code> | <code>string[]</code> | Skaffold profiles to use when rendering the manifest for this stage's `Target`. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.targetId">targetId</a></code> | <code>string</code> | The target_id to which this stage points. |

---

##### `deployParameters`<sup>Optional</sup> <a name="deployParameters" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.deployParameters"></a>

```typescript
public readonly deployParameters: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]

deploy_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#deploy_parameters GoogleClouddeployDeliveryPipeline#deploy_parameters}

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

Skaffold profiles to use when rendering the manifest for this stage's `Target`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.strategy"></a>

```typescript
public readonly strategy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#strategy GoogleClouddeployDeliveryPipeline#strategy}

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target_id to which this stage points.

This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#target_id GoogleClouddeployDeliveryPipeline#target_id}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.values">values</a></code> | <code>{[ key: string ]: string}</code> | Required. Values are deploy parameters in key-value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.matchTargetLabels">matchTargetLabels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.values"></a>

```typescript
public readonly values: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Required. Values are deploy parameters in key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#values GoogleClouddeployDeliveryPipeline#values}

---

##### `matchTargetLabels`<sup>Optional</sup> <a name="matchTargetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters.property.matchTargetLabels"></a>

```typescript
public readonly matchTargetLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#match_target_labels GoogleClouddeployDeliveryPipeline#match_target_labels}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.canary">canary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.standard">standard</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | standard block. |

---

##### `canary`<sup>Optional</sup> <a name="canary" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.canary"></a>

```typescript
public readonly canary: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#canary GoogleClouddeployDeliveryPipeline#canary}

---

##### `standard`<sup>Optional</sup> <a name="standard" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy.property.standard"></a>

```typescript
public readonly standard: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

standard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#standard GoogleClouddeployDeliveryPipeline#standard}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.canaryDeployment">canaryDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a></code> | canary_deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.customCanaryDeployment">customCanaryDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a></code> | custom_canary_deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a></code> | runtime_config block. |

---

##### `canaryDeployment`<sup>Optional</sup> <a name="canaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.canaryDeployment"></a>

```typescript
public readonly canaryDeployment: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

canary_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#canary_deployment GoogleClouddeployDeliveryPipeline#canary_deployment}

---

##### `customCanaryDeployment`<sup>Optional</sup> <a name="customCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.customCanaryDeployment"></a>

```typescript
public readonly customCanaryDeployment: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

custom_canary_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#custom_canary_deployment GoogleClouddeployDeliveryPipeline#custom_canary_deployment}

---

##### `runtimeConfig`<sup>Optional</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#runtime_config GoogleClouddeployDeliveryPipeline#runtime_config}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.percentages">percentages</a></code> | <code>number[]</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.postdeploy">postdeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a></code> | postdeploy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.predeploy">predeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a></code> | predeploy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run verify tests after each percentage deployment. |

---

##### `percentages`<sup>Required</sup> <a name="percentages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.percentages"></a>

```typescript
public readonly percentages: number[];
```

- *Type:* number[]

Required.

The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#percentages GoogleClouddeployDeliveryPipeline#percentages}

---

##### `postdeploy`<sup>Optional</sup> <a name="postdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.postdeploy"></a>

```typescript
public readonly postdeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

postdeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}

---

##### `predeploy`<sup>Optional</sup> <a name="predeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.predeploy"></a>

```typescript
public readonly predeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

predeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run verify tests after each percentage deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy.property.actions">actions</a></code> | <code>string[]</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy.property.actions">actions</a></code> | <code>string[]</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment.property.phaseConfigs">phaseConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]</code> | phase_configs block. |

---

##### `phaseConfigs`<sup>Required</sup> <a name="phaseConfigs" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment.property.phaseConfigs"></a>

```typescript
public readonly phaseConfigs: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]

phase_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#phase_configs GoogleClouddeployDeliveryPipeline#phase_configs}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.percentage">percentage</a></code> | <code>number</code> | Required. Percentage deployment for the phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.phaseId">phaseId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.postdeploy">postdeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a></code> | postdeploy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.predeploy">predeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a></code> | predeploy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.profiles">profiles</a></code> | <code>string[]</code> | Skaffold profiles to use when rendering the manifest for this phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to run verify tests after the deployment. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Required. Percentage deployment for the phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#percentage GoogleClouddeployDeliveryPipeline#percentage}

---

##### `phaseId`<sup>Required</sup> <a name="phaseId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.phaseId"></a>

```typescript
public readonly phaseId: string;
```

- *Type:* string

Required.

The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#phase_id GoogleClouddeployDeliveryPipeline#phase_id}

---

##### `postdeploy`<sup>Optional</sup> <a name="postdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.postdeploy"></a>

```typescript
public readonly postdeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

postdeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}

---

##### `predeploy`<sup>Optional</sup> <a name="predeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.predeploy"></a>

```typescript
public readonly predeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

predeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

Skaffold profiles to use when rendering the manifest for this phase.

These are in addition to the profiles list specified in the `DeliveryPipeline` stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#profiles GoogleClouddeployDeliveryPipeline#profiles}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to run verify tests after the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy.property.actions">actions</a></code> | <code>string[]</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy.property.actions">actions</a></code> | <code>string[]</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a></code> | cloud_run block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a></code> | kubernetes block. |

---

##### `cloudRun`<sup>Optional</sup> <a name="cloudRun" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.cloudRun"></a>

```typescript
public readonly cloudRun: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

cloud_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#cloud_run GoogleClouddeployDeliveryPipeline#cloud_run}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig.property.kubernetes"></a>

```typescript
public readonly kubernetes: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#kubernetes GoogleClouddeployDeliveryPipeline#kubernetes}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.automaticTrafficControl">automaticTrafficControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.canaryRevisionTags">canaryRevisionTags</a></code> | <code>string[]</code> | Optional. A list of tags that are added to the canary revision while the canary phase is in progress. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.priorRevisionTags">priorRevisionTags</a></code> | <code>string[]</code> | Optional. A list of tags that are added to the prior revision while the canary phase is in progress. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.stableRevisionTags">stableRevisionTags</a></code> | <code>string[]</code> | Optional. A list of tags that are added to the final stable revision when the stable phase is applied. |

---

##### `automaticTrafficControl`<sup>Optional</sup> <a name="automaticTrafficControl" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.automaticTrafficControl"></a>

```typescript
public readonly automaticTrafficControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting.

This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#automatic_traffic_control GoogleClouddeployDeliveryPipeline#automatic_traffic_control}

---

##### `canaryRevisionTags`<sup>Optional</sup> <a name="canaryRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.canaryRevisionTags"></a>

```typescript
public readonly canaryRevisionTags: string[];
```

- *Type:* string[]

Optional. A list of tags that are added to the canary revision while the canary phase is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#canary_revision_tags GoogleClouddeployDeliveryPipeline#canary_revision_tags}

---

##### `priorRevisionTags`<sup>Optional</sup> <a name="priorRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.priorRevisionTags"></a>

```typescript
public readonly priorRevisionTags: string[];
```

- *Type:* string[]

Optional. A list of tags that are added to the prior revision while the canary phase is in progress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#prior_revision_tags GoogleClouddeployDeliveryPipeline#prior_revision_tags}

---

##### `stableRevisionTags`<sup>Optional</sup> <a name="stableRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun.property.stableRevisionTags"></a>

```typescript
public readonly stableRevisionTags: string[];
```

- *Type:* string[]

Optional. A list of tags that are added to the final stable revision when the stable phase is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#stable_revision_tags GoogleClouddeployDeliveryPipeline#stable_revision_tags}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.gatewayServiceMesh">gatewayServiceMesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a></code> | gateway_service_mesh block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.serviceNetworking">serviceNetworking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a></code> | service_networking block. |

---

##### `gatewayServiceMesh`<sup>Optional</sup> <a name="gatewayServiceMesh" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.gatewayServiceMesh"></a>

```typescript
public readonly gatewayServiceMesh: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

gateway_service_mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#gateway_service_mesh GoogleClouddeployDeliveryPipeline#gateway_service_mesh}

---

##### `serviceNetworking`<sup>Optional</sup> <a name="serviceNetworking" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes.property.serviceNetworking"></a>

```typescript
public readonly serviceNetworking: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

service_networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#service_networking GoogleClouddeployDeliveryPipeline#service_networking}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.deployment">deployment</a></code> | <code>string</code> | Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.httpRoute">httpRoute</a></code> | <code>string</code> | Required. Name of the Gateway API HTTPRoute. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.service">service</a></code> | <code>string</code> | Required. Name of the Kubernetes Service. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.podSelectorLabel">podSelectorLabel</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeDestinations">routeDestinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a></code> | route_destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeUpdateWaitTime">routeUpdateWaitTime</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.stableCutbackDuration">stableCutbackDuration</a></code> | <code>string</code> | Optional. |

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#deployment GoogleClouddeployDeliveryPipeline#deployment}

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.httpRoute"></a>

```typescript
public readonly httpRoute: string;
```

- *Type:* string

Required. Name of the Gateway API HTTPRoute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#http_route GoogleClouddeployDeliveryPipeline#http_route}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. Name of the Kubernetes Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#service GoogleClouddeployDeliveryPipeline#service}

---

##### `podSelectorLabel`<sup>Optional</sup> <a name="podSelectorLabel" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.podSelectorLabel"></a>

```typescript
public readonly podSelectorLabel: string;
```

- *Type:* string

Optional.

The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#pod_selector_label GoogleClouddeployDeliveryPipeline#pod_selector_label}

---

##### `routeDestinations`<sup>Optional</sup> <a name="routeDestinations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeDestinations"></a>

```typescript
public readonly routeDestinations: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

route_destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#route_destinations GoogleClouddeployDeliveryPipeline#route_destinations}

---

##### `routeUpdateWaitTime`<sup>Optional</sup> <a name="routeUpdateWaitTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.routeUpdateWaitTime"></a>

```typescript
public readonly routeUpdateWaitTime: string;
```

- *Type:* string

Optional.

The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#route_update_wait_time GoogleClouddeployDeliveryPipeline#route_update_wait_time}

---

##### `stableCutbackDuration`<sup>Optional</sup> <a name="stableCutbackDuration" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh.property.stableCutbackDuration"></a>

```typescript
public readonly stableCutbackDuration: string;
```

- *Type:* string

Optional.

The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#stable_cutback_duration GoogleClouddeployDeliveryPipeline#stable_cutback_duration}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.destinationIds">destinationIds</a></code> | <code>string[]</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.propagateService">propagateService</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |

---

##### `destinationIds`<sup>Required</sup> <a name="destinationIds" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.destinationIds"></a>

```typescript
public readonly destinationIds: string[];
```

- *Type:* string[]

Required.

The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#destination_ids GoogleClouddeployDeliveryPipeline#destination_ids}

---

##### `propagateService`<sup>Optional</sup> <a name="propagateService" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations.property.propagateService"></a>

```typescript
public readonly propagateService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitiate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#propagate_service GoogleClouddeployDeliveryPipeline#propagate_service}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.deployment">deployment</a></code> | <code>string</code> | Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.service">service</a></code> | <code>string</code> | Required. Name of the Kubernetes Service. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.disablePodOverprovisioning">disablePodOverprovisioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.podSelectorLabel">podSelectorLabel</a></code> | <code>string</code> | Optional. |

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#deployment GoogleClouddeployDeliveryPipeline#deployment}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. Name of the Kubernetes Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#service GoogleClouddeployDeliveryPipeline#service}

---

##### `disablePodOverprovisioning`<sup>Optional</sup> <a name="disablePodOverprovisioning" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.disablePodOverprovisioning"></a>

```typescript
public readonly disablePodOverprovisioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#disable_pod_overprovisioning GoogleClouddeployDeliveryPipeline#disable_pod_overprovisioning}

---

##### `podSelectorLabel`<sup>Optional</sup> <a name="podSelectorLabel" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking.property.podSelectorLabel"></a>

```typescript
public readonly podSelectorLabel: string;
```

- *Type:* string

Optional.

The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#pod_selector_label GoogleClouddeployDeliveryPipeline#pod_selector_label}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.postdeploy">postdeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a></code> | postdeploy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.predeploy">predeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a></code> | predeploy block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to verify a deployment. |

---

##### `postdeploy`<sup>Optional</sup> <a name="postdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.postdeploy"></a>

```typescript
public readonly postdeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

postdeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#postdeploy GoogleClouddeployDeliveryPipeline#postdeploy}

---

##### `predeploy`<sup>Optional</sup> <a name="predeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.predeploy"></a>

```typescript
public readonly predeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

predeploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#predeploy GoogleClouddeployDeliveryPipeline#predeploy}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to verify a deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#verify GoogleClouddeployDeliveryPipeline#verify}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy.property.actions">actions</a></code> | <code>string[]</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Optional. A sequence of skaffold custom actions to invoke during execution of the postdeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}

---

### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy.property.actions">actions</a></code> | <code>string[]</code> | Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Optional. A sequence of skaffold custom actions to invoke during execution of the predeploy job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#actions GoogleClouddeployDeliveryPipeline#actions}

---

### GoogleClouddeployDeliveryPipelineTimeouts <a name="GoogleClouddeployDeliveryPipelineTimeouts" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

const googleClouddeployDeliveryPipelineTimeouts: googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#create GoogleClouddeployDeliveryPipeline#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#delete GoogleClouddeployDeliveryPipeline#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#update GoogleClouddeployDeliveryPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#create GoogleClouddeployDeliveryPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#delete GoogleClouddeployDeliveryPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_delivery_pipeline#update GoogleClouddeployDeliveryPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployDeliveryPipelineConditionList <a name="GoogleClouddeployDeliveryPipelineConditionList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleClouddeployDeliveryPipelineConditionOutputReference <a name="GoogleClouddeployDeliveryPipelineConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition">pipelineReadyCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList">GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition">targetsPresentCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList">GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.targetsTypeCondition">targetsTypeCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList">GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineCondition">GoogleClouddeployDeliveryPipelineCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineReadyCondition`<sup>Required</sup> <a name="pipelineReadyCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition"></a>

```typescript
public readonly pipelineReadyCondition: GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList">GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a>

---

##### `targetsPresentCondition`<sup>Required</sup> <a name="targetsPresentCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition"></a>

```typescript
public readonly targetsPresentCondition: GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList">GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a>

---

##### `targetsTypeCondition`<sup>Required</sup> <a name="targetsTypeCondition" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.targetsTypeCondition"></a>

```typescript
public readonly targetsTypeCondition: GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList">GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineCondition">GoogleClouddeployDeliveryPipelineCondition</a>

---


### GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList <a name="GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference <a name="GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition">GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition">GoogleClouddeployDeliveryPipelineConditionPipelineReadyCondition</a>

---


### GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList <a name="GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference <a name="GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets">missingTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition">GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `missingTargets`<sup>Required</sup> <a name="missingTargets" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets"></a>

```typescript
public readonly missingTargets: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition">GoogleClouddeployDeliveryPipelineConditionTargetsPresentCondition</a>

---


### GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList <a name="GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference <a name="GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.errorDetails">errorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition">GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.errorDetails"></a>

```typescript
public readonly errorDetails: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition">GoogleClouddeployDeliveryPipelineConditionTargetsTypeCondition</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages">resetStages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStages` <a name="putStages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages"></a>

```typescript
public putStages(value: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]

---

##### `resetStages` <a name="resetStages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages"></a>

```typescript
public resetStages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages">stages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList">GoogleClouddeployDeliveryPipelineSerialPipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput">stagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages"></a>

```typescript
public readonly stages: GoogleClouddeployDeliveryPipelineSerialPipelineStagesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList">GoogleClouddeployDeliveryPipelineSerialPipelineStagesList</a>

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput"></a>

```typescript
public readonly stagesInput: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipeline;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipeline">GoogleClouddeployDeliveryPipelineSerialPipeline</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resetMatchTargetLabels">resetMatchTargetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchTargetLabels` <a name="resetMatchTargetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.resetMatchTargetLabels"></a>

```typescript
public resetMatchTargetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabelsInput">matchTargetLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabels">matchTargetLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.values">values</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchTargetLabelsInput`<sup>Optional</sup> <a name="matchTargetLabelsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabelsInput"></a>

```typescript
public readonly matchTargetLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchTargetLabels`<sup>Required</sup> <a name="matchTargetLabels" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.matchTargetLabels"></a>

```typescript
public readonly matchTargetLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.values"></a>

```typescript
public readonly values: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesList <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>[]

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putDeployParameters">putDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetDeployParameters">resetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles">resetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeployParameters` <a name="putDeployParameters" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putDeployParameters"></a>

```typescript
public putDeployParameters(value: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putDeployParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy"></a>

```typescript
public putStrategy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---

##### `resetDeployParameters` <a name="resetDeployParameters" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetDeployParameters"></a>

```typescript
public resetDeployParameters(): void
```

##### `resetProfiles` <a name="resetProfiles" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles"></a>

```typescript
public resetProfiles(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetTargetId` <a name="resetTargetId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId"></a>

```typescript
public resetTargetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParameters">deployParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParametersInput">deployParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput">profilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategyInput">strategyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployParameters`<sup>Required</sup> <a name="deployParameters" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParameters"></a>

```typescript
public readonly deployParameters: GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategy"></a>

```typescript
public readonly strategy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference</a>

---

##### `deployParametersInput`<sup>Optional</sup> <a name="deployParametersInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.deployParametersInput"></a>

```typescript
public readonly deployParametersInput: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters">GoogleClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters</a>[]

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput"></a>

```typescript
public readonly profilesInput: string[];
```

- *Type:* string[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.strategyInput"></a>

```typescript
public readonly strategyInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStages">GoogleClouddeployDeliveryPipelineSerialPipelineStages</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPostdeploy">putPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPredeploy">putPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPostdeploy">resetPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPredeploy">resetPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetVerify">resetVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostdeploy` <a name="putPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPostdeploy"></a>

```typescript
public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPostdeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

---

##### `putPredeploy` <a name="putPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPredeploy"></a>

```typescript
public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.putPredeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

---

##### `resetPostdeploy` <a name="resetPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPostdeploy"></a>

```typescript
public resetPostdeploy(): void
```

##### `resetPredeploy` <a name="resetPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetPredeploy"></a>

```typescript
public resetPredeploy(): void
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.resetVerify"></a>

```typescript
public resetVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeploy">postdeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeploy">predeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentagesInput">percentagesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeployInput">postdeployInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeployInput">predeployInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verifyInput">verifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentages">percentages</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postdeploy`<sup>Required</sup> <a name="postdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeploy"></a>

```typescript
public readonly postdeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference</a>

---

##### `predeploy`<sup>Required</sup> <a name="predeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeploy"></a>

```typescript
public readonly predeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference</a>

---

##### `percentagesInput`<sup>Optional</sup> <a name="percentagesInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentagesInput"></a>

```typescript
public readonly percentagesInput: number[];
```

- *Type:* number[]

---

##### `postdeployInput`<sup>Optional</sup> <a name="postdeployInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.postdeployInput"></a>

```typescript
public readonly postdeployInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

---

##### `predeployInput`<sup>Optional</sup> <a name="predeployInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.predeployInput"></a>

```typescript
public readonly predeployInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentages`<sup>Required</sup> <a name="percentages" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.percentages"></a>

```typescript
public readonly percentages: number[];
```

- *Type:* number[]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPostdeploy</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentPredeploy</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.putPhaseConfigs">putPhaseConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhaseConfigs` <a name="putPhaseConfigs" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.putPhaseConfigs"></a>

```typescript
public putPhaseConfigs(value: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.putPhaseConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigs">phaseConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigsInput">phaseConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phaseConfigs`<sup>Required</sup> <a name="phaseConfigs" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigs"></a>

```typescript
public readonly phaseConfigs: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList</a>

---

##### `phaseConfigsInput`<sup>Optional</sup> <a name="phaseConfigsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.phaseConfigsInput"></a>

```typescript
public readonly phaseConfigsInput: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.get"></a>

```typescript
public get(index: number): GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>[]

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPostdeploy">putPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPredeploy">putPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPostdeploy">resetPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPredeploy">resetPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetProfiles">resetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetVerify">resetVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostdeploy` <a name="putPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPostdeploy"></a>

```typescript
public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPostdeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

---

##### `putPredeploy` <a name="putPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPredeploy"></a>

```typescript
public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.putPredeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

---

##### `resetPostdeploy` <a name="resetPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPostdeploy"></a>

```typescript
public resetPostdeploy(): void
```

##### `resetPredeploy` <a name="resetPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetPredeploy"></a>

```typescript
public resetPredeploy(): void
```

##### `resetProfiles` <a name="resetProfiles" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetProfiles"></a>

```typescript
public resetProfiles(): void
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.resetVerify"></a>

```typescript
public resetVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeploy">postdeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeploy">predeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseIdInput">phaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeployInput">postdeployInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeployInput">predeployInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profilesInput">profilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verifyInput">verifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseId">phaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postdeploy`<sup>Required</sup> <a name="postdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeploy"></a>

```typescript
public readonly postdeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference</a>

---

##### `predeploy`<sup>Required</sup> <a name="predeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeploy"></a>

```typescript
public readonly predeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference</a>

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `phaseIdInput`<sup>Optional</sup> <a name="phaseIdInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseIdInput"></a>

```typescript
public readonly phaseIdInput: string;
```

- *Type:* string

---

##### `postdeployInput`<sup>Optional</sup> <a name="postdeployInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.postdeployInput"></a>

```typescript
public readonly postdeployInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

---

##### `predeployInput`<sup>Optional</sup> <a name="predeployInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.predeployInput"></a>

```typescript
public readonly predeployInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profilesInput"></a>

```typescript
public readonly profilesInput: string[];
```

- *Type:* string[]

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `phaseId`<sup>Required</sup> <a name="phaseId" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.phaseId"></a>

```typescript
public readonly phaseId: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPostdeploy</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsPredeploy</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCanaryDeployment">putCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCustomCanaryDeployment">putCustomCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putRuntimeConfig">putRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCanaryDeployment">resetCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCustomCanaryDeployment">resetCustomCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetRuntimeConfig">resetRuntimeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanaryDeployment` <a name="putCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCanaryDeployment"></a>

```typescript
public putCanaryDeployment(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCanaryDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

---

##### `putCustomCanaryDeployment` <a name="putCustomCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCustomCanaryDeployment"></a>

```typescript
public putCustomCanaryDeployment(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putCustomCanaryDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

---

##### `putRuntimeConfig` <a name="putRuntimeConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putRuntimeConfig"></a>

```typescript
public putRuntimeConfig(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

---

##### `resetCanaryDeployment` <a name="resetCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCanaryDeployment"></a>

```typescript
public resetCanaryDeployment(): void
```

##### `resetCustomCanaryDeployment` <a name="resetCustomCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetCustomCanaryDeployment"></a>

```typescript
public resetCustomCanaryDeployment(): void
```

##### `resetRuntimeConfig` <a name="resetRuntimeConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.resetRuntimeConfig"></a>

```typescript
public resetRuntimeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeployment">canaryDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeployment">customCanaryDeployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfig">runtimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeploymentInput">canaryDeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeploymentInput">customCanaryDeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfigInput">runtimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canaryDeployment`<sup>Required</sup> <a name="canaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeployment"></a>

```typescript
public readonly canaryDeployment: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference</a>

---

##### `customCanaryDeployment`<sup>Required</sup> <a name="customCanaryDeployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeployment"></a>

```typescript
public readonly customCanaryDeployment: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference</a>

---

##### `runtimeConfig`<sup>Required</sup> <a name="runtimeConfig" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfig"></a>

```typescript
public readonly runtimeConfig: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference</a>

---

##### `canaryDeploymentInput`<sup>Optional</sup> <a name="canaryDeploymentInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.canaryDeploymentInput"></a>

```typescript
public readonly canaryDeploymentInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment</a>

---

##### `customCanaryDeploymentInput`<sup>Optional</sup> <a name="customCanaryDeploymentInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.customCanaryDeploymentInput"></a>

```typescript
public readonly customCanaryDeploymentInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment</a>

---

##### `runtimeConfigInput`<sup>Optional</sup> <a name="runtimeConfigInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.runtimeConfigInput"></a>

```typescript
public readonly runtimeConfigInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetAutomaticTrafficControl">resetAutomaticTrafficControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetCanaryRevisionTags">resetCanaryRevisionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetPriorRevisionTags">resetPriorRevisionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetStableRevisionTags">resetStableRevisionTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutomaticTrafficControl` <a name="resetAutomaticTrafficControl" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetAutomaticTrafficControl"></a>

```typescript
public resetAutomaticTrafficControl(): void
```

##### `resetCanaryRevisionTags` <a name="resetCanaryRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetCanaryRevisionTags"></a>

```typescript
public resetCanaryRevisionTags(): void
```

##### `resetPriorRevisionTags` <a name="resetPriorRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetPriorRevisionTags"></a>

```typescript
public resetPriorRevisionTags(): void
```

##### `resetStableRevisionTags` <a name="resetStableRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.resetStableRevisionTags"></a>

```typescript
public resetStableRevisionTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControlInput">automaticTrafficControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTagsInput">canaryRevisionTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTagsInput">priorRevisionTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTagsInput">stableRevisionTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControl">automaticTrafficControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTags">canaryRevisionTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTags">priorRevisionTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTags">stableRevisionTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticTrafficControlInput`<sup>Optional</sup> <a name="automaticTrafficControlInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControlInput"></a>

```typescript
public readonly automaticTrafficControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canaryRevisionTagsInput`<sup>Optional</sup> <a name="canaryRevisionTagsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTagsInput"></a>

```typescript
public readonly canaryRevisionTagsInput: string[];
```

- *Type:* string[]

---

##### `priorRevisionTagsInput`<sup>Optional</sup> <a name="priorRevisionTagsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTagsInput"></a>

```typescript
public readonly priorRevisionTagsInput: string[];
```

- *Type:* string[]

---

##### `stableRevisionTagsInput`<sup>Optional</sup> <a name="stableRevisionTagsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTagsInput"></a>

```typescript
public readonly stableRevisionTagsInput: string[];
```

- *Type:* string[]

---

##### `automaticTrafficControl`<sup>Required</sup> <a name="automaticTrafficControl" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.automaticTrafficControl"></a>

```typescript
public readonly automaticTrafficControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canaryRevisionTags`<sup>Required</sup> <a name="canaryRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.canaryRevisionTags"></a>

```typescript
public readonly canaryRevisionTags: string[];
```

- *Type:* string[]

---

##### `priorRevisionTags`<sup>Required</sup> <a name="priorRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.priorRevisionTags"></a>

```typescript
public readonly priorRevisionTags: string[];
```

- *Type:* string[]

---

##### `stableRevisionTags`<sup>Required</sup> <a name="stableRevisionTags" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.stableRevisionTags"></a>

```typescript
public readonly stableRevisionTags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.putRouteDestinations">putRouteDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetPodSelectorLabel">resetPodSelectorLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteDestinations">resetRouteDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteUpdateWaitTime">resetRouteUpdateWaitTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetStableCutbackDuration">resetStableCutbackDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRouteDestinations` <a name="putRouteDestinations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.putRouteDestinations"></a>

```typescript
public putRouteDestinations(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.putRouteDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

---

##### `resetPodSelectorLabel` <a name="resetPodSelectorLabel" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetPodSelectorLabel"></a>

```typescript
public resetPodSelectorLabel(): void
```

##### `resetRouteDestinations` <a name="resetRouteDestinations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteDestinations"></a>

```typescript
public resetRouteDestinations(): void
```

##### `resetRouteUpdateWaitTime` <a name="resetRouteUpdateWaitTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetRouteUpdateWaitTime"></a>

```typescript
public resetRouteUpdateWaitTime(): void
```

##### `resetStableCutbackDuration` <a name="resetStableCutbackDuration" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.resetStableCutbackDuration"></a>

```typescript
public resetStableCutbackDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinations">routeDestinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deploymentInput">deploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRouteInput">httpRouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabelInput">podSelectorLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinationsInput">routeDestinationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTimeInput">routeUpdateWaitTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDurationInput">stableCutbackDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRoute">httpRoute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabel">podSelectorLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTime">routeUpdateWaitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDuration">stableCutbackDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routeDestinations`<sup>Required</sup> <a name="routeDestinations" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinations"></a>

```typescript
public readonly routeDestinations: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference</a>

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: string;
```

- *Type:* string

---

##### `httpRouteInput`<sup>Optional</sup> <a name="httpRouteInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRouteInput"></a>

```typescript
public readonly httpRouteInput: string;
```

- *Type:* string

---

##### `podSelectorLabelInput`<sup>Optional</sup> <a name="podSelectorLabelInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabelInput"></a>

```typescript
public readonly podSelectorLabelInput: string;
```

- *Type:* string

---

##### `routeDestinationsInput`<sup>Optional</sup> <a name="routeDestinationsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeDestinationsInput"></a>

```typescript
public readonly routeDestinationsInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

---

##### `routeUpdateWaitTimeInput`<sup>Optional</sup> <a name="routeUpdateWaitTimeInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTimeInput"></a>

```typescript
public readonly routeUpdateWaitTimeInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `stableCutbackDurationInput`<sup>Optional</sup> <a name="stableCutbackDurationInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDurationInput"></a>

```typescript
public readonly stableCutbackDurationInput: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.httpRoute"></a>

```typescript
public readonly httpRoute: string;
```

- *Type:* string

---

##### `podSelectorLabel`<sup>Required</sup> <a name="podSelectorLabel" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.podSelectorLabel"></a>

```typescript
public readonly podSelectorLabel: string;
```

- *Type:* string

---

##### `routeUpdateWaitTime`<sup>Required</sup> <a name="routeUpdateWaitTime" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.routeUpdateWaitTime"></a>

```typescript
public readonly routeUpdateWaitTime: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `stableCutbackDuration`<sup>Required</sup> <a name="stableCutbackDuration" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.stableCutbackDuration"></a>

```typescript
public readonly stableCutbackDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resetPropagateService">resetPropagateService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropagateService` <a name="resetPropagateService" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.resetPropagateService"></a>

```typescript
public resetPropagateService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIdsInput">destinationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateServiceInput">propagateServiceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIds">destinationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateService">propagateService</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdsInput`<sup>Optional</sup> <a name="destinationIdsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIdsInput"></a>

```typescript
public readonly destinationIdsInput: string[];
```

- *Type:* string[]

---

##### `propagateServiceInput`<sup>Optional</sup> <a name="propagateServiceInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateServiceInput"></a>

```typescript
public readonly propagateServiceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationIds`<sup>Required</sup> <a name="destinationIds" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.destinationIds"></a>

```typescript
public readonly destinationIds: string[];
```

- *Type:* string[]

---

##### `propagateService`<sup>Required</sup> <a name="propagateService" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.propagateService"></a>

```typescript
public readonly propagateService: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshRouteDestinations</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putGatewayServiceMesh">putGatewayServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putServiceNetworking">putServiceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetGatewayServiceMesh">resetGatewayServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetServiceNetworking">resetServiceNetworking</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGatewayServiceMesh` <a name="putGatewayServiceMesh" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putGatewayServiceMesh"></a>

```typescript
public putGatewayServiceMesh(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putGatewayServiceMesh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

---

##### `putServiceNetworking` <a name="putServiceNetworking" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putServiceNetworking"></a>

```typescript
public putServiceNetworking(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.putServiceNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

---

##### `resetGatewayServiceMesh` <a name="resetGatewayServiceMesh" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetGatewayServiceMesh"></a>

```typescript
public resetGatewayServiceMesh(): void
```

##### `resetServiceNetworking` <a name="resetServiceNetworking" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.resetServiceNetworking"></a>

```typescript
public resetServiceNetworking(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMesh">gatewayServiceMesh</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworking">serviceNetworking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMeshInput">gatewayServiceMeshInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworkingInput">serviceNetworkingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewayServiceMesh`<sup>Required</sup> <a name="gatewayServiceMesh" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMesh"></a>

```typescript
public readonly gatewayServiceMesh: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference</a>

---

##### `serviceNetworking`<sup>Required</sup> <a name="serviceNetworking" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworking"></a>

```typescript
public readonly serviceNetworking: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference</a>

---

##### `gatewayServiceMeshInput`<sup>Optional</sup> <a name="gatewayServiceMeshInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.gatewayServiceMeshInput"></a>

```typescript
public readonly gatewayServiceMeshInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh</a>

---

##### `serviceNetworkingInput`<sup>Optional</sup> <a name="serviceNetworkingInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.serviceNetworkingInput"></a>

```typescript
public readonly serviceNetworkingInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetDisablePodOverprovisioning">resetDisablePodOverprovisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetPodSelectorLabel">resetPodSelectorLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisablePodOverprovisioning` <a name="resetDisablePodOverprovisioning" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetDisablePodOverprovisioning"></a>

```typescript
public resetDisablePodOverprovisioning(): void
```

##### `resetPodSelectorLabel` <a name="resetPodSelectorLabel" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.resetPodSelectorLabel"></a>

```typescript
public resetPodSelectorLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deploymentInput">deploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioningInput">disablePodOverprovisioningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabelInput">podSelectorLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioning">disablePodOverprovisioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabel">podSelectorLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: string;
```

- *Type:* string

---

##### `disablePodOverprovisioningInput`<sup>Optional</sup> <a name="disablePodOverprovisioningInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioningInput"></a>

```typescript
public readonly disablePodOverprovisioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podSelectorLabelInput`<sup>Optional</sup> <a name="podSelectorLabelInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabelInput"></a>

```typescript
public readonly podSelectorLabelInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `disablePodOverprovisioning`<sup>Required</sup> <a name="disablePodOverprovisioning" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.disablePodOverprovisioning"></a>

```typescript
public readonly disablePodOverprovisioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podSelectorLabel`<sup>Required</sup> <a name="podSelectorLabel" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.podSelectorLabel"></a>

```typescript
public readonly podSelectorLabel: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putCloudRun">putCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetCloudRun">resetCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetKubernetes">resetKubernetes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudRun` <a name="putCloudRun" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putCloudRun"></a>

```typescript
public putCloudRun(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putCloudRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putKubernetes"></a>

```typescript
public putKubernetes(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

---

##### `resetCloudRun` <a name="resetCloudRun" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetCloudRun"></a>

```typescript
public resetCloudRun(): void
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRun">cloudRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRunInput">cloudRunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudRun`<sup>Required</sup> <a name="cloudRun" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRun"></a>

```typescript
public readonly cloudRun: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetes"></a>

```typescript
public readonly kubernetes: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference</a>

---

##### `cloudRunInput`<sup>Optional</sup> <a name="cloudRunInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.cloudRunInput"></a>

```typescript
public readonly cloudRunInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putCanary">putCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard">putStandard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetCanary">resetCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetStandard">resetStandard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanary` <a name="putCanary" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putCanary"></a>

```typescript
public putCanary(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

---

##### `putStandard` <a name="putStandard" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard"></a>

```typescript
public putStandard(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---

##### `resetCanary` <a name="resetCanary" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetCanary"></a>

```typescript
public resetCanary(): void
```

##### `resetStandard` <a name="resetStandard" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.resetStandard"></a>

```typescript
public resetStandard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canary">canary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canaryInput">canaryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standardInput">standardInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canary`<sup>Required</sup> <a name="canary" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canary"></a>

```typescript
public readonly canary: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standard"></a>

```typescript
public readonly standard: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference</a>

---

##### `canaryInput`<sup>Optional</sup> <a name="canaryInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.canaryInput"></a>

```typescript
public readonly canaryInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary</a>

---

##### `standardInput`<sup>Optional</sup> <a name="standardInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.standardInput"></a>

```typescript
public readonly standardInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategy</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPostdeploy">putPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPredeploy">putPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPostdeploy">resetPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPredeploy">resetPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetVerify">resetVerify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostdeploy` <a name="putPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPostdeploy"></a>

```typescript
public putPostdeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPostdeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

---

##### `putPredeploy` <a name="putPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPredeploy"></a>

```typescript
public putPredeploy(value: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.putPredeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

---

##### `resetPostdeploy` <a name="resetPostdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPostdeploy"></a>

```typescript
public resetPostdeploy(): void
```

##### `resetPredeploy` <a name="resetPredeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetPredeploy"></a>

```typescript
public resetPredeploy(): void
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.resetVerify"></a>

```typescript
public resetVerify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeploy">postdeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeploy">predeploy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeployInput">postdeployInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeployInput">predeployInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verifyInput">verifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postdeploy`<sup>Required</sup> <a name="postdeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeploy"></a>

```typescript
public readonly postdeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference</a>

---

##### `predeploy`<sup>Required</sup> <a name="predeploy" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeploy"></a>

```typescript
public readonly predeploy: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference</a>

---

##### `postdeployInput`<sup>Optional</sup> <a name="postdeployInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.postdeployInput"></a>

```typescript
public readonly postdeployInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

---

##### `predeployInput`<sup>Optional</sup> <a name="predeployInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.predeployInput"></a>

```typescript
public readonly predeployInput: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPostdeploy</a>

---


### GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference <a name="GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy">GoogleClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardPredeploy</a>

---


### GoogleClouddeployDeliveryPipelineTimeoutsOutputReference <a name="GoogleClouddeployDeliveryPipelineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployDeliveryPipeline } from '@cdktf/provider-google-beta'

new googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployDeliveryPipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployDeliveryPipeline.GoogleClouddeployDeliveryPipelineTimeouts">GoogleClouddeployDeliveryPipelineTimeouts</a>

---



