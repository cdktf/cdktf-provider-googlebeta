# `googleDataPipelinePipeline` Submodule <a name="`googleDataPipelinePipeline` Submodule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataPipelinePipeline <a name="GoogleDataPipelinePipeline" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline google_data_pipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipeline(scope: Construct, id: string, config: GoogleDataPipelinePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig">GoogleDataPipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig">GoogleDataPipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putScheduleInfo">putScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putWorkload">putWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetPipelineSources">resetPipelineSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetScheduleInfo">resetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetSchedulerServiceAccountEmail">resetSchedulerServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetWorkload">resetWorkload</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduleInfo` <a name="putScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putScheduleInfo"></a>

```typescript
public putScheduleInfo(value: GoogleDataPipelinePipelineScheduleInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataPipelinePipelineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a>

---

##### `putWorkload` <a name="putWorkload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putWorkload"></a>

```typescript
public putWorkload(value: GoogleDataPipelinePipelineWorkload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.putWorkload.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPipelineSources` <a name="resetPipelineSources" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetPipelineSources"></a>

```typescript
public resetPipelineSources(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScheduleInfo` <a name="resetScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetScheduleInfo"></a>

```typescript
public resetScheduleInfo(): void
```

##### `resetSchedulerServiceAccountEmail` <a name="resetSchedulerServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetSchedulerServiceAccountEmail"></a>

```typescript
public resetSchedulerServiceAccountEmail(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkload` <a name="resetWorkload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.resetWorkload"></a>

```typescript
public resetWorkload(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataPipelinePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataPipelinePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataPipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataPipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataPipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.jobCount">jobCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference">GoogleDataPipelinePipelineScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference">GoogleDataPipelinePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workload">workload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference">GoogleDataPipelinePipelineWorkloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSourcesInput">pipelineSourcesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfoInput">scheduleInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmailInput">schedulerServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workloadInput">workloadInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSources">pipelineSources</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmail">schedulerServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `jobCount`<sup>Required</sup> <a name="jobCount" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.jobCount"></a>

```typescript
public readonly jobCount: number;
```

- *Type:* number

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `scheduleInfo`<sup>Required</sup> <a name="scheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: GoogleDataPipelinePipelineScheduleInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference">GoogleDataPipelinePipelineScheduleInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataPipelinePipelineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference">GoogleDataPipelinePipelineTimeoutsOutputReference</a>

---

##### `workload`<sup>Required</sup> <a name="workload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workload"></a>

```typescript
public readonly workload: GoogleDataPipelinePipelineWorkloadOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference">GoogleDataPipelinePipelineWorkloadOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pipelineSourcesInput`<sup>Optional</sup> <a name="pipelineSourcesInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSourcesInput"></a>

```typescript
public readonly pipelineSourcesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scheduleInfoInput`<sup>Optional</sup> <a name="scheduleInfoInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.scheduleInfoInput"></a>

```typescript
public readonly scheduleInfoInput: GoogleDataPipelinePipelineScheduleInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

---

##### `schedulerServiceAccountEmailInput`<sup>Optional</sup> <a name="schedulerServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmailInput"></a>

```typescript
public readonly schedulerServiceAccountEmailInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataPipelinePipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workloadInput`<sup>Optional</sup> <a name="workloadInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.workloadInput"></a>

```typescript
public readonly workloadInput: GoogleDataPipelinePipelineWorkload;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipelineSources`<sup>Required</sup> <a name="pipelineSources" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.pipelineSources"></a>

```typescript
public readonly pipelineSources: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schedulerServiceAccountEmail`<sup>Required</sup> <a name="schedulerServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.schedulerServiceAccountEmail"></a>

```typescript
public readonly schedulerServiceAccountEmail: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataPipelinePipelineConfig <a name="GoogleDataPipelinePipelineConfig" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineConfig: googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.name">name</a></code> | <code>string</code> | "The pipeline name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.state">state</a></code> | <code>string</code> | The state of the pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.type">type</a></code> | <code>string</code> | The type of the pipeline. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#id GoogleDataPipelinePipeline#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.pipelineSources">pipelineSources</a></code> | <code>{[ key: string ]: string}</code> | The sources of the pipeline (for example, Dataplex). |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#project GoogleDataPipelinePipeline#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.region">region</a></code> | <code>string</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.schedulerServiceAccountEmail">schedulerServiceAccountEmail</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.workload">workload</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a></code> | workload block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

"The pipeline name.

For example': 'projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID."
"- PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see Identifying projects."
"LOCATION_ID is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling google.cloud.location.Locations.ListLocations. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in App Engine regions."
"PIPELINE_ID is the ID of the pipeline. Must be unique for the selected project and location."

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#name GoogleDataPipelinePipeline#name}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the pipeline.

When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through pipelines.patch requests.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#state Possible values: ["STATE_UNSPECIFIED", "STATE_RESUMING", "STATE_ACTIVE", "STATE_STOPPING", "STATE_ARCHIVED", "STATE_PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#state GoogleDataPipelinePipeline#state}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the pipeline.

This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#pipelinetype Possible values: ["PIPELINE_TYPE_UNSPECIFIED", "PIPELINE_TYPE_BATCH", "PIPELINE_TYPE_STREAMING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#type GoogleDataPipelinePipeline#type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#display_name GoogleDataPipelinePipeline#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#id GoogleDataPipelinePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipelineSources`<sup>Optional</sup> <a name="pipelineSources" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.pipelineSources"></a>

```typescript
public readonly pipelineSources: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The sources of the pipeline (for example, Dataplex).

The keys and values are set by the corresponding sources during pipeline creation.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#pipeline_sources GoogleDataPipelinePipeline#pipeline_sources}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#project GoogleDataPipelinePipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#region GoogleDataPipelinePipeline#region}

---

##### `scheduleInfo`<sup>Optional</sup> <a name="scheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.scheduleInfo"></a>

```typescript
public readonly scheduleInfo: GoogleDataPipelinePipelineScheduleInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#schedule_info GoogleDataPipelinePipeline#schedule_info}

---

##### `schedulerServiceAccountEmail`<sup>Optional</sup> <a name="schedulerServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.schedulerServiceAccountEmail"></a>

```typescript
public readonly schedulerServiceAccountEmail: string;
```

- *Type:* string

Optional.

A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#scheduler_service_account_email GoogleDataPipelinePipeline#scheduler_service_account_email}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataPipelinePipelineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#timeouts GoogleDataPipelinePipeline#timeouts}

---

##### `workload`<sup>Optional</sup> <a name="workload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineConfig.property.workload"></a>

```typescript
public readonly workload: GoogleDataPipelinePipelineWorkload;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

workload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#workload GoogleDataPipelinePipeline#workload}

---

### GoogleDataPipelinePipelineScheduleInfo <a name="GoogleDataPipelinePipelineScheduleInfo" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineScheduleInfo: googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.schedule">schedule</a></code> | <code>string</code> | Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.timeZone">timeZone</a></code> | <code>string</code> | Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#schedule GoogleDataPipelinePipeline#schedule}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#time_zone GoogleDataPipelinePipeline#time_zone}

---

### GoogleDataPipelinePipelineTimeouts <a name="GoogleDataPipelinePipelineTimeouts" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineTimeouts: googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#create GoogleDataPipelinePipeline#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#delete GoogleDataPipelinePipeline#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#create GoogleDataPipelinePipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#delete GoogleDataPipelinePipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}.

---

### GoogleDataPipelinePipelineWorkload <a name="GoogleDataPipelinePipelineWorkload" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkload: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest">dataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | dataflow_flex_template_request block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest">dataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | dataflow_launch_template_request block. |

---

##### `dataflowFlexTemplateRequest`<sup>Optional</sup> <a name="dataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowFlexTemplateRequest"></a>

```typescript
public readonly dataflowFlexTemplateRequest: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

dataflow_flex_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#dataflow_flex_template_request GoogleDataPipelinePipeline#dataflow_flex_template_request}

---

##### `dataflowLaunchTemplateRequest`<sup>Optional</sup> <a name="dataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload.property.dataflowLaunchTemplateRequest"></a>

```typescript
public readonly dataflowLaunchTemplateRequest: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

dataflow_launch_template_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#dataflow_launch_template_request GoogleDataPipelinePipeline#dataflow_launch_template_request}

---

### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter">launchParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | launch_parameter block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location">location</a></code> | <code>string</code> | The regional endpoint to which to direct the request. For example, us-central1, us-west1. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId">projectId</a></code> | <code>string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the request is validated but not actually executed. Defaults to false. |

---

##### `launchParameter`<sup>Required</sup> <a name="launchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.launchParameter"></a>

```typescript
public readonly launchParameter: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

launch_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#launch_parameter GoogleDataPipelinePipeline#launch_parameter}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The regional endpoint to which to direct the request. For example, us-central1, us-west1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#location GoogleDataPipelinePipeline#location}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#project_id GoogleDataPipelinePipeline#project_id}

---

##### `validateOnly`<sup>Optional</sup> <a name="validateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the request is validated but not actually executed. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#validate_only GoogleDataPipelinePipeline#validate_only}

---

### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName">jobName</a></code> | <code>string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>string</code> | Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions">launchOptions</a></code> | <code>{[ key: string ]: string}</code> | Launch options for this Flex Template job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | 'The parameters for the Flex Template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings">transformNameMappings</a></code> | <code>{[ key: string ]: string}</code> | 'Use this to pass transform name mappings for streaming update jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true if you are sending a request to update a running streaming job. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The job name to use for the created job.

For an update job request, the job name should be the same as the existing running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#job_name GoogleDataPipelinePipeline#job_name}

---

##### `containerSpecGcsPath`<sup>Optional</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.containerSpecGcsPath"></a>

```typescript
public readonly containerSpecGcsPath: string;
```

- *Type:* string

Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#container_spec_gcs_path GoogleDataPipelinePipeline#container_spec_gcs_path}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.environment"></a>

```typescript
public readonly environment: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#environment GoogleDataPipelinePipeline#environment}

---

##### `launchOptions`<sup>Optional</sup> <a name="launchOptions" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.launchOptions"></a>

```typescript
public readonly launchOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Launch options for this Flex Template job.

This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#launch_options GoogleDataPipelinePipeline#launch_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

'The parameters for the Flex Template.

Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#parameters GoogleDataPipelinePipeline#parameters}

---

##### `transformNameMappings`<sup>Optional</sup> <a name="transformNameMappings" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.transformNameMappings"></a>

```typescript
public readonly transformNameMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

'Use this to pass transform name mappings for streaming update jobs.

Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#transform_name_mappings GoogleDataPipelinePipeline#transform_name_mappings}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true if you are sending a request to update a running streaming job.

When set, the job name should be the same as the running job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}

---

### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal">flexrsGoal</a></code> | <code>string</code> | Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType">machineType</a></code> | <code>string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network">network</a></code> | <code>string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers">numWorkers</a></code> | <code>number</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork">subnetwork</a></code> | <code>string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation">tempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion">workerRegion</a></code> | <code>string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone">workerZone</a></code> | <code>string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone">zone</a></code> | <code>string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#additional_experiments GoogleDataPipelinePipeline#additional_experiments}

---

##### `additionalUserLabels`<sup>Optional</sup> <a name="additionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#additional_user_labels GoogleDataPipelinePipeline#additional_user_labels}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#enable_streaming_engine GoogleDataPipelinePipeline#enable_streaming_engine}

---

##### `flexrsGoal`<sup>Optional</sup> <a name="flexrsGoal" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.flexrsGoal"></a>

```typescript
public readonly flexrsGoal: string;
```

- *Type:* string

Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexResourceSchedulingGoal Possible values: ["FLEXRS_UNSPECIFIED", "FLEXRS_SPEED_OPTIMIZED", "FLEXRS_COST_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#flexrs_goal GoogleDataPipelinePipeline#flexrs_goal}

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#ip_configuration GoogleDataPipelinePipeline#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#kms_key_name GoogleDataPipelinePipeline#kms_key_name}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#machine_type GoogleDataPipelinePipeline#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#max_workers GoogleDataPipelinePipeline#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#network GoogleDataPipelinePipeline#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#num_workers GoogleDataPipelinePipeline#num_workers}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#service_account_email GoogleDataPipelinePipeline#service_account_email}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#subnetwork GoogleDataPipelinePipeline#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#temp_location GoogleDataPipelinePipeline#temp_location}

---

##### `workerRegion`<sup>Optional</sup> <a name="workerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#worker_region GoogleDataPipelinePipeline#worker_region}

---

##### `workerZone`<sup>Optional</sup> <a name="workerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#worker_zone GoogleDataPipelinePipeline#worker_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#zone GoogleDataPipelinePipeline#zone}

---

### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId">projectId</a></code> | <code>string</code> | The ID of the Cloud Platform project that the job belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath">gcsPath</a></code> | <code>string</code> | A Cloud Storage path to the template from which to create the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters">launchParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | launch_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location">location</a></code> | <code>string</code> | The regional endpoint to which to direct the request. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#validate_only GoogleDataPipelinePipeline#validate_only}. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the Cloud Platform project that the job belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#project_id GoogleDataPipelinePipeline#project_id}

---

##### `gcsPath`<sup>Optional</sup> <a name="gcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.gcsPath"></a>

```typescript
public readonly gcsPath: string;
```

- *Type:* string

A Cloud Storage path to the template from which to create the job.

Must be a valid Cloud Storage URL, beginning with 'gs://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#gcs_path GoogleDataPipelinePipeline#gcs_path}

---

##### `launchParameters`<sup>Optional</sup> <a name="launchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.launchParameters"></a>

```typescript
public readonly launchParameters: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

launch_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#launch_parameters GoogleDataPipelinePipeline#launch_parameters}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The regional endpoint to which to direct the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#location GoogleDataPipelinePipeline#location}

---

##### `validateOnly`<sup>Optional</sup> <a name="validateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#validate_only GoogleDataPipelinePipeline#validate_only}.

---

### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName">jobName</a></code> | <code>string</code> | The job name to use for the created job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The runtime parameters to pass to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The job name to use for the created job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#job_name GoogleDataPipelinePipeline#job_name}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.environment"></a>

```typescript
public readonly environment: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#environment GoogleDataPipelinePipeline#environment}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The runtime parameters to pass to the job.

'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#parameters GoogleDataPipelinePipeline#parameters}

---

##### `transformNameMapping`<sup>Optional</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.

Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#transform_name_mapping GoogleDataPipelinePipeline#transform_name_mapping}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#update GoogleDataPipelinePipeline#update}

---

### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

const googleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment: googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | Additional experiment flags for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | Additional user labels to be specified for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation">bypassTempDirValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to bypass the safety checks for the job's temporary directory. Use with caution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable Streaming Engine for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType">machineType</a></code> | <code>string</code> | The machine type to use for the job. Defaults to the value from the template if not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network">network</a></code> | <code>string</code> | Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers">numWorkers</a></code> | <code>number</code> | The initial number of Compute Engine instances for the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | The email address of the service account to run the job as. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork">subnetwork</a></code> | <code>string</code> | Subnetwork to which VMs will be assigned, if desired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation">tempLocation</a></code> | <code>string</code> | The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion">workerRegion</a></code> | <code>string</code> | The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone">workerZone</a></code> | <code>string</code> | The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone">zone</a></code> | <code>string</code> | The Compute Engine availability zone for launching worker instances to run your pipeline. |

---

##### `additionalExperiments`<sup>Optional</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

Additional experiment flags for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#additional_experiments GoogleDataPipelinePipeline#additional_experiments}

---

##### `additionalUserLabels`<sup>Optional</sup> <a name="additionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional user labels to be specified for the job.

Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#additional_user_labels GoogleDataPipelinePipeline#additional_user_labels}

---

##### `bypassTempDirValidation`<sup>Optional</sup> <a name="bypassTempDirValidation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.bypassTempDirValidation"></a>

```typescript
public readonly bypassTempDirValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to bypass the safety checks for the job's temporary directory. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#bypass_temp_dir_validation GoogleDataPipelinePipeline#bypass_temp_dir_validation}

---

##### `enableStreamingEngine`<sup>Optional</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable Streaming Engine for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#enable_streaming_engine GoogleDataPipelinePipeline#enable_streaming_engine}

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

Configuration for VM IPs. https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration Possible values: ["WORKER_IP_UNSPECIFIED", "WORKER_IP_PUBLIC", "WORKER_IP_PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#ip_configuration GoogleDataPipelinePipeline#ip_configuration}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#kms_key_name GoogleDataPipelinePipeline#kms_key_name}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to use for the job. Defaults to the value from the template if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#machine_type GoogleDataPipelinePipeline#machine_type}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#max_workers GoogleDataPipelinePipeline#max_workers}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#network GoogleDataPipelinePipeline#network}

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

The initial number of Compute Engine instances for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#num_workers GoogleDataPipelinePipeline#num_workers}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

The email address of the service account to run the job as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#service_account_email GoogleDataPipelinePipeline#service_account_email}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Subnetwork to which VMs will be assigned, if desired.

You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#subnetwork GoogleDataPipelinePipeline#subnetwork}

---

##### `tempLocation`<sup>Optional</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#temp_location GoogleDataPipelinePipeline#temp_location}

---

##### `workerRegion`<sup>Optional</sup> <a name="workerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#worker_region GoogleDataPipelinePipeline#worker_region}

---

##### `workerZone`<sup>Optional</sup> <a name="workerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#worker_zone GoogleDataPipelinePipeline#worker_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The Compute Engine availability zone for launching worker instances to run your pipeline.

In the future, workerZone will take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_pipeline_pipeline#zone GoogleDataPipelinePipeline#zone}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataPipelinePipelineScheduleInfoOutputReference <a name="GoogleDataPipelinePipelineScheduleInfoOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime">nextJobTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextJobTime`<sup>Required</sup> <a name="nextJobTime" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.nextJobTime"></a>

```typescript
public readonly nextJobTime: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineScheduleInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineScheduleInfo">GoogleDataPipelinePipelineScheduleInfo</a>

---


### GoogleDataPipelinePipelineTimeoutsOutputReference <a name="GoogleDataPipelinePipelineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataPipelinePipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineTimeouts">GoogleDataPipelinePipelineTimeouts</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels">resetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal">resetFlexrsGoal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion">resetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone">resetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalExperiments"></a>

```typescript
public resetAdditionalExperiments(): void
```

##### `resetAdditionalUserLabels` <a name="resetAdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```typescript
public resetAdditionalUserLabels(): void
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```typescript
public resetEnableStreamingEngine(): void
```

##### `resetFlexrsGoal` <a name="resetFlexrsGoal" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetFlexrsGoal"></a>

```typescript
public resetFlexrsGoal(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetNumWorkers"></a>

```typescript
public resetNumWorkers(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetTempLocation"></a>

```typescript
public resetTempLocation(): void
```

##### `resetWorkerRegion` <a name="resetWorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerRegion"></a>

```typescript
public resetWorkerRegion(): void
```

##### `resetWorkerZone` <a name="resetWorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetWorkerZone"></a>

```typescript
public resetWorkerZone(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput">additionalUserLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput">flexrsGoalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput">numWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput">tempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput">workerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput">workerZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal">flexrsGoal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers">numWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation">tempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion">workerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone">workerZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```typescript
public readonly additionalExperimentsInput: string[];
```

- *Type:* string[]

---

##### `additionalUserLabelsInput`<sup>Optional</sup> <a name="additionalUserLabelsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```typescript
public readonly additionalUserLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```typescript
public readonly enableStreamingEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flexrsGoalInput`<sup>Optional</sup> <a name="flexrsGoalInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoalInput"></a>

```typescript
public readonly flexrsGoalInput: string;
```

- *Type:* string

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkersInput"></a>

```typescript
public readonly numWorkersInput: number;
```

- *Type:* number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocationInput"></a>

```typescript
public readonly tempLocationInput: string;
```

- *Type:* string

---

##### `workerRegionInput`<sup>Optional</sup> <a name="workerRegionInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegionInput"></a>

```typescript
public readonly workerRegionInput: string;
```

- *Type:* string

---

##### `workerZoneInput`<sup>Optional</sup> <a name="workerZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZoneInput"></a>

```typescript
public readonly workerZoneInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

---

##### `additionalUserLabels`<sup>Required</sup> <a name="additionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flexrsGoal`<sup>Required</sup> <a name="flexrsGoal" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.flexrsGoal"></a>

```typescript
public readonly flexrsGoal: string;
```

- *Type:* string

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

---

##### `workerRegion`<sup>Required</sup> <a name="workerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

---

##### `workerZone`<sup>Required</sup> <a name="workerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath">resetContainerSpecGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions">resetLaunchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings">resetTransformNameMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `resetContainerSpecGcsPath` <a name="resetContainerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetContainerSpecGcsPath"></a>

```typescript
public resetContainerSpecGcsPath(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetLaunchOptions` <a name="resetLaunchOptions" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetLaunchOptions"></a>

```typescript
public resetLaunchOptions(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTransformNameMappings` <a name="resetTransformNameMappings" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetTransformNameMappings"></a>

```typescript
public resetTransformNameMappings(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput">containerSpecGcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput">launchOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput">transformNameMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath">containerSpecGcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions">launchOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings">transformNameMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environment"></a>

```typescript
public readonly environment: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironmentOutputReference</a>

---

##### `containerSpecGcsPathInput`<sup>Optional</sup> <a name="containerSpecGcsPathInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPathInput"></a>

```typescript
public readonly containerSpecGcsPathInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment</a>

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `launchOptionsInput`<sup>Optional</sup> <a name="launchOptionsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptionsInput"></a>

```typescript
public readonly launchOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMappingsInput`<sup>Optional</sup> <a name="transformNameMappingsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappingsInput"></a>

```typescript
public readonly transformNameMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerSpecGcsPath`<sup>Required</sup> <a name="containerSpecGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.containerSpecGcsPath"></a>

```typescript
public readonly containerSpecGcsPath: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `launchOptions`<sup>Required</sup> <a name="launchOptions" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.launchOptions"></a>

```typescript
public readonly launchOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMappings`<sup>Required</sup> <a name="transformNameMappings" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.transformNameMappings"></a>

```typescript
public readonly transformNameMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter">putLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly">resetValidateOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchParameter` <a name="putLaunchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter"></a>

```typescript
public putLaunchParameter(value: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.putLaunchParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `resetValidateOnly` <a name="resetValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.resetValidateOnly"></a>

```typescript
public resetValidateOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter">launchParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput">launchParameterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput">validateOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchParameter`<sup>Required</sup> <a name="launchParameter" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameter"></a>

```typescript
public readonly launchParameter: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameterOutputReference</a>

---

##### `launchParameterInput`<sup>Optional</sup> <a name="launchParameterInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.launchParameterInput"></a>

```typescript
public readonly launchParameterInput: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestLaunchParameter</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `validateOnlyInput`<sup>Optional</sup> <a name="validateOnlyInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnlyInput"></a>

```typescript
public readonly validateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `validateOnly`<sup>Required</sup> <a name="validateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments">resetAdditionalExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels">resetAdditionalUserLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation">resetBypassTempDirValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine">resetEnableStreamingEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation">resetTempLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion">resetWorkerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone">resetWorkerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalExperiments` <a name="resetAdditionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalExperiments"></a>

```typescript
public resetAdditionalExperiments(): void
```

##### `resetAdditionalUserLabels` <a name="resetAdditionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetAdditionalUserLabels"></a>

```typescript
public resetAdditionalUserLabels(): void
```

##### `resetBypassTempDirValidation` <a name="resetBypassTempDirValidation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetBypassTempDirValidation"></a>

```typescript
public resetBypassTempDirValidation(): void
```

##### `resetEnableStreamingEngine` <a name="resetEnableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetEnableStreamingEngine"></a>

```typescript
public resetEnableStreamingEngine(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetMaxWorkers"></a>

```typescript
public resetMaxWorkers(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetNumWorkers"></a>

```typescript
public resetNumWorkers(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTempLocation` <a name="resetTempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetTempLocation"></a>

```typescript
public resetTempLocation(): void
```

##### `resetWorkerRegion` <a name="resetWorkerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerRegion"></a>

```typescript
public resetWorkerRegion(): void
```

##### `resetWorkerZone` <a name="resetWorkerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetWorkerZone"></a>

```typescript
public resetWorkerZone(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput">additionalExperimentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput">additionalUserLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput">bypassTempDirValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput">enableStreamingEngineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput">numWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput">tempLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput">workerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput">workerZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments">additionalExperiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels">additionalUserLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation">bypassTempDirValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine">enableStreamingEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers">numWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation">tempLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion">workerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone">workerZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExperimentsInput`<sup>Optional</sup> <a name="additionalExperimentsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperimentsInput"></a>

```typescript
public readonly additionalExperimentsInput: string[];
```

- *Type:* string[]

---

##### `additionalUserLabelsInput`<sup>Optional</sup> <a name="additionalUserLabelsInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabelsInput"></a>

```typescript
public readonly additionalUserLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bypassTempDirValidationInput`<sup>Optional</sup> <a name="bypassTempDirValidationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidationInput"></a>

```typescript
public readonly bypassTempDirValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStreamingEngineInput`<sup>Optional</sup> <a name="enableStreamingEngineInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngineInput"></a>

```typescript
public readonly enableStreamingEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkersInput"></a>

```typescript
public readonly maxWorkersInput: number;
```

- *Type:* number

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkersInput"></a>

```typescript
public readonly numWorkersInput: number;
```

- *Type:* number

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `tempLocationInput`<sup>Optional</sup> <a name="tempLocationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocationInput"></a>

```typescript
public readonly tempLocationInput: string;
```

- *Type:* string

---

##### `workerRegionInput`<sup>Optional</sup> <a name="workerRegionInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegionInput"></a>

```typescript
public readonly workerRegionInput: string;
```

- *Type:* string

---

##### `workerZoneInput`<sup>Optional</sup> <a name="workerZoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZoneInput"></a>

```typescript
public readonly workerZoneInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `additionalExperiments`<sup>Required</sup> <a name="additionalExperiments" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalExperiments"></a>

```typescript
public readonly additionalExperiments: string[];
```

- *Type:* string[]

---

##### `additionalUserLabels`<sup>Required</sup> <a name="additionalUserLabels" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.additionalUserLabels"></a>

```typescript
public readonly additionalUserLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bypassTempDirValidation`<sup>Required</sup> <a name="bypassTempDirValidation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.bypassTempDirValidation"></a>

```typescript
public readonly bypassTempDirValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStreamingEngine`<sup>Required</sup> <a name="enableStreamingEngine" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.enableStreamingEngine"></a>

```typescript
public readonly enableStreamingEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.maxWorkers"></a>

```typescript
public readonly maxWorkers: number;
```

- *Type:* number

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.numWorkers"></a>

```typescript
public readonly numWorkers: number;
```

- *Type:* number

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `tempLocation`<sup>Required</sup> <a name="tempLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.tempLocation"></a>

```typescript
public readonly tempLocation: string;
```

- *Type:* string

---

##### `workerRegion`<sup>Required</sup> <a name="workerRegion" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerRegion"></a>

```typescript
public readonly workerRegion: string;
```

- *Type:* string

---

##### `workerZone`<sup>Required</sup> <a name="workerZone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.workerZone"></a>

```typescript
public readonly workerZone: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping">resetTransformNameMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment"></a>

```typescript
public putEnvironment(value: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTransformNameMapping` <a name="resetTransformNameMapping" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetTransformNameMapping"></a>

```typescript
public resetTransformNameMapping(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput">transformNameMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput">updateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping">transformNameMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update">update</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environment"></a>

```typescript
public readonly environment: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironmentOutputReference</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment</a>

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMappingInput`<sup>Optional</sup> <a name="transformNameMappingInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMappingInput"></a>

```typescript
public readonly transformNameMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformNameMapping`<sup>Required</sup> <a name="transformNameMapping" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.transformNameMapping"></a>

```typescript
public readonly transformNameMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.update"></a>

```typescript
public readonly update: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---


### GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference <a name="GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters">putLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath">resetGcsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters">resetLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly">resetValidateOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLaunchParameters` <a name="putLaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters"></a>

```typescript
public putLaunchParameters(value: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.putLaunchParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `resetGcsPath` <a name="resetGcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetGcsPath"></a>

```typescript
public resetGcsPath(): void
```

##### `resetLaunchParameters` <a name="resetLaunchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLaunchParameters"></a>

```typescript
public resetLaunchParameters(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetValidateOnly` <a name="resetValidateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.resetValidateOnly"></a>

```typescript
public resetValidateOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters">launchParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput">gcsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput">launchParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput">validateOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath">gcsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly">validateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `launchParameters`<sup>Required</sup> <a name="launchParameters" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParameters"></a>

```typescript
public readonly launchParameters: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersOutputReference</a>

---

##### `gcsPathInput`<sup>Optional</sup> <a name="gcsPathInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPathInput"></a>

```typescript
public readonly gcsPathInput: string;
```

- *Type:* string

---

##### `launchParametersInput`<sup>Optional</sup> <a name="launchParametersInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.launchParametersInput"></a>

```typescript
public readonly launchParametersInput: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `validateOnlyInput`<sup>Optional</sup> <a name="validateOnlyInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnlyInput"></a>

```typescript
public readonly validateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gcsPath`<sup>Required</sup> <a name="gcsPath" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.gcsPath"></a>

```typescript
public readonly gcsPath: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `validateOnly`<sup>Required</sup> <a name="validateOnly" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.validateOnly"></a>

```typescript
public readonly validateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---


### GoogleDataPipelinePipelineWorkloadOutputReference <a name="GoogleDataPipelinePipelineWorkloadOutputReference" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer"></a>

```typescript
import { googleDataPipelinePipeline } from '@cdktf/provider-google-beta'

new googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest">putDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest">putDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest">resetDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest">resetDataflowLaunchTemplateRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataflowFlexTemplateRequest` <a name="putDataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest"></a>

```typescript
public putDataflowFlexTemplateRequest(value: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowFlexTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `putDataflowLaunchTemplateRequest` <a name="putDataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest"></a>

```typescript
public putDataflowLaunchTemplateRequest(value: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.putDataflowLaunchTemplateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `resetDataflowFlexTemplateRequest` <a name="resetDataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowFlexTemplateRequest"></a>

```typescript
public resetDataflowFlexTemplateRequest(): void
```

##### `resetDataflowLaunchTemplateRequest` <a name="resetDataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.resetDataflowLaunchTemplateRequest"></a>

```typescript
public resetDataflowLaunchTemplateRequest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest">dataflowFlexTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest">dataflowLaunchTemplateRequest</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput">dataflowFlexTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput">dataflowLaunchTemplateRequestInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataflowFlexTemplateRequest`<sup>Required</sup> <a name="dataflowFlexTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequest"></a>

```typescript
public readonly dataflowFlexTemplateRequest: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequestOutputReference</a>

---

##### `dataflowLaunchTemplateRequest`<sup>Required</sup> <a name="dataflowLaunchTemplateRequest" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequest"></a>

```typescript
public readonly dataflowLaunchTemplateRequest: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequestOutputReference</a>

---

##### `dataflowFlexTemplateRequestInput`<sup>Optional</sup> <a name="dataflowFlexTemplateRequestInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowFlexTemplateRequestInput"></a>

```typescript
public readonly dataflowFlexTemplateRequestInput: GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowFlexTemplateRequest</a>

---

##### `dataflowLaunchTemplateRequestInput`<sup>Optional</sup> <a name="dataflowLaunchTemplateRequestInput" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.dataflowLaunchTemplateRequestInput"></a>

```typescript
public readonly dataflowLaunchTemplateRequestInput: GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest">GoogleDataPipelinePipelineWorkloadDataflowLaunchTemplateRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataPipelinePipelineWorkload;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataPipelinePipeline.GoogleDataPipelinePipelineWorkload">GoogleDataPipelinePipelineWorkload</a>

---



