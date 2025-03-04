# `googleColabNotebookExecution` Submodule <a name="`googleColabNotebookExecution` Submodule" id="@cdktf/provider-google-beta.googleColabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabNotebookExecution <a name="GoogleColabNotebookExecution" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

new googleColabNotebookExecution.GoogleColabNotebookExecution(scope: Construct, id: string, config: GoogleColabNotebookExecutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig">GoogleColabNotebookExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig">GoogleColabNotebookExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource">putDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource">resetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId">resetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">resetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource"></a>

```typescript
public putDataformRepositorySource(value: GoogleColabNotebookExecutionDataformRepositorySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `putDirectNotebookSource` <a name="putDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource"></a>

```typescript
public putDirectNotebookSource(value: GoogleColabNotebookExecutionDirectNotebookSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource"></a>

```typescript
public putGcsNotebookSource(value: GoogleColabNotebookExecutionGcsNotebookSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleColabNotebookExecutionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDataformRepositorySource"></a>

```typescript
public resetDataformRepositorySource(): void
```

##### `resetDirectNotebookSource` <a name="resetDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetDirectNotebookSource"></a>

```typescript
public resetDirectNotebookSource(): void
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetExecutionUser"></a>

```typescript
public resetExecutionUser(): void
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetGcsNotebookSource"></a>

```typescript
public resetGcsNotebookSource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotebookExecutionJobId` <a name="resetNotebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookExecutionJobId"></a>

```typescript
public resetNotebookExecutionJobId(): void
```

##### `resetNotebookRuntimeTemplateResourceName` <a name="resetNotebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```typescript
public resetNotebookRuntimeTemplateResourceName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleColabNotebookExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput">directNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput">executionUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput">notebookExecutionJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser">executionUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri">gcsOutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySource"></a>

```typescript
public readonly dataformRepositorySource: GoogleColabNotebookExecutionDataformRepositorySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference">GoogleColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `directNotebookSource`<sup>Required</sup> <a name="directNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSource"></a>

```typescript
public readonly directNotebookSource: GoogleColabNotebookExecutionDirectNotebookSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference">GoogleColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSource"></a>

```typescript
public readonly gcsNotebookSource: GoogleColabNotebookExecutionGcsNotebookSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference">GoogleColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleColabNotebookExecutionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference">GoogleColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```typescript
public readonly dataformRepositorySourceInput: GoogleColabNotebookExecutionDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---

##### `directNotebookSourceInput`<sup>Optional</sup> <a name="directNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.directNotebookSourceInput"></a>

```typescript
public readonly directNotebookSourceInput: GoogleColabNotebookExecutionDirectNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: string;
```

- *Type:* string

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUserInput"></a>

```typescript
public readonly executionUserInput: string;
```

- *Type:* string

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```typescript
public readonly gcsNotebookSourceInput: GoogleColabNotebookExecutionGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUriInput"></a>

```typescript
public readonly gcsOutputUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notebookExecutionJobIdInput`<sup>Optional</sup> <a name="notebookExecutionJobIdInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```typescript
public readonly notebookExecutionJobIdInput: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```typescript
public readonly notebookRuntimeTemplateResourceNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleColabNotebookExecutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.executionUser"></a>

```typescript
public readonly executionUser: string;
```

- *Type:* string

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.gcsOutputUri"></a>

```typescript
public readonly gcsOutputUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `notebookExecutionJobId`<sup>Required</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookExecutionJobId"></a>

```typescript
public readonly notebookExecutionJobId: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```typescript
public readonly notebookRuntimeTemplateResourceName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabNotebookExecutionConfig <a name="GoogleColabNotebookExecutionConfig" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

const googleColabNotebookExecutionConfig: googleColabNotebookExecution.GoogleColabNotebookExecutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri">gcsOutputUri</a></code> | <code>string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location">location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser">executionUser</a></code> | <code>string</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>string</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#display_name GoogleColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```typescript
public readonly gcsOutputUri: string;
```

- *Type:* string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#gcs_output_uri GoogleColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#location GoogleColabNotebookExecution#location}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```typescript
public readonly dataformRepositorySource: GoogleColabNotebookExecutionDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#dataform_repository_source GoogleColabNotebookExecution#dataform_repository_source}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.directNotebookSource"></a>

```typescript
public readonly directNotebookSource: GoogleColabNotebookExecutionDirectNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#direct_notebook_source GoogleColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#execution_timeout GoogleColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.executionUser"></a>

```typescript
public readonly executionUser: string;
```

- *Type:* string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#execution_user GoogleColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```typescript
public readonly gcsNotebookSource: GoogleColabNotebookExecutionGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#gcs_notebook_source GoogleColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#id GoogleColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```typescript
public readonly notebookExecutionJobId: string;
```

- *Type:* string

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#notebook_execution_job_id GoogleColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```typescript
public readonly notebookRuntimeTemplateResourceName: string;
```

- *Type:* string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#notebook_runtime_template_resource_name GoogleColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#project GoogleColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#service_account GoogleColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleColabNotebookExecutionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#timeouts GoogleColabNotebookExecution#timeouts}

---

### GoogleColabNotebookExecutionDataformRepositorySource <a name="GoogleColabNotebookExecutionDataformRepositorySource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

const googleColabNotebookExecutionDataformRepositorySource: googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```typescript
public readonly dataformRepositoryResourceName: string;
```

- *Type:* string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#dataform_repository_resource_name GoogleColabNotebookExecution#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#commit_sha GoogleColabNotebookExecution#commit_sha}

---

### GoogleColabNotebookExecutionDirectNotebookSource <a name="GoogleColabNotebookExecutionDirectNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

const googleColabNotebookExecutionDirectNotebookSource: googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content">content</a></code> | <code>string</code> | The base64-encoded contents of the input notebook file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#content GoogleColabNotebookExecution#content}

---

### GoogleColabNotebookExecutionGcsNotebookSource <a name="GoogleColabNotebookExecutionGcsNotebookSource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

const googleColabNotebookExecutionGcsNotebookSource: googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri">uri</a></code> | <code>string</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation">generation</a></code> | <code>string</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#uri GoogleColabNotebookExecution#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#generation GoogleColabNotebookExecution#generation}

---

### GoogleColabNotebookExecutionTimeouts <a name="GoogleColabNotebookExecutionTimeouts" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

const googleColabNotebookExecutionTimeouts: googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#create GoogleColabNotebookExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_notebook_execution#delete GoogleColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabNotebookExecutionDataformRepositorySourceOutputReference <a name="GoogleColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

new googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```typescript
public resetCommitSha(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```typescript
public readonly commitShaInput: string;
```

- *Type:* string

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```typescript
public readonly dataformRepositoryResourceNameInput: string;
```

- *Type:* string

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```typescript
public readonly dataformRepositoryResourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabNotebookExecutionDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDataformRepositorySource">GoogleColabNotebookExecutionDataformRepositorySource</a>

---


### GoogleColabNotebookExecutionDirectNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

new googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabNotebookExecutionDirectNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionDirectNotebookSource">GoogleColabNotebookExecutionDirectNotebookSource</a>

---


### GoogleColabNotebookExecutionGcsNotebookSourceOutputReference <a name="GoogleColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

new googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```typescript
public resetGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```typescript
public readonly generationInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabNotebookExecutionGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionGcsNotebookSource">GoogleColabNotebookExecutionGcsNotebookSource</a>

---


### GoogleColabNotebookExecutionTimeoutsOutputReference <a name="GoogleColabNotebookExecutionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleColabNotebookExecution } from '@cdktf/provider-google-beta'

new googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleColabNotebookExecutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabNotebookExecution.GoogleColabNotebookExecutionTimeouts">GoogleColabNotebookExecutionTimeouts</a>

---



