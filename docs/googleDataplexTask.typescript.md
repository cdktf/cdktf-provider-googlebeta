# `googleDataplexTask` Submodule <a name="`googleDataplexTask` Submodule" id="@cdktf/provider-google-beta.googleDataplexTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexTask <a name="GoogleDataplexTask" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task google_dataplex_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTask(scope: Construct, id: string, config: GoogleDataplexTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig">GoogleDataplexTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig">GoogleDataplexTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec">putExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook">putNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec">putTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLake">resetLake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetNotebook">resetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTaskId">resetTaskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExecutionSpec` <a name="putExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec"></a>

```typescript
public putExecutionSpec(value: GoogleDataplexTaskExecutionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---

##### `putNotebook` <a name="putNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook"></a>

```typescript
public putNotebook(value: GoogleDataplexTaskNotebook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark"></a>

```typescript
public putSpark(value: GoogleDataplexTaskSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexTaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

---

##### `putTriggerSpec` <a name="putTriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec"></a>

```typescript
public putTriggerSpec(value: GoogleDataplexTaskTriggerSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLake` <a name="resetLake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLake"></a>

```typescript
public resetLake(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNotebook` <a name="resetNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetNotebook"></a>

```typescript
public resetNotebook(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetTaskId` <a name="resetTaskId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTaskId"></a>

```typescript
public resetTaskId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

googleDataplexTask.GoogleDataplexTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

googleDataplexTask.GoogleDataplexTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

googleDataplexTask.GoogleDataplexTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

googleDataplexTask.GoogleDataplexTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpec">executionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference">GoogleDataplexTaskExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionStatus">executionStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList">GoogleDataplexTaskExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference">GoogleDataplexTaskNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference">GoogleDataplexTaskSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference">GoogleDataplexTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpec">triggerSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference">GoogleDataplexTaskTriggerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpecInput">executionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lakeInput">lakeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebookInput">notebookInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskIdInput">taskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpecInput">triggerSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lake">lake</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskId">taskId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `executionSpec`<sup>Required</sup> <a name="executionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpec"></a>

```typescript
public readonly executionSpec: GoogleDataplexTaskExecutionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference">GoogleDataplexTaskExecutionSpecOutputReference</a>

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionStatus"></a>

```typescript
public readonly executionStatus: GoogleDataplexTaskExecutionStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList">GoogleDataplexTaskExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebook"></a>

```typescript
public readonly notebook: GoogleDataplexTaskNotebookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference">GoogleDataplexTaskNotebookOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.spark"></a>

```typescript
public readonly spark: GoogleDataplexTaskSparkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference">GoogleDataplexTaskSparkOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexTaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference">GoogleDataplexTaskTimeoutsOutputReference</a>

---

##### `triggerSpec`<sup>Required</sup> <a name="triggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpec"></a>

```typescript
public readonly triggerSpec: GoogleDataplexTaskTriggerSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference">GoogleDataplexTaskTriggerSpecOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionSpecInput`<sup>Optional</sup> <a name="executionSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpecInput"></a>

```typescript
public readonly executionSpecInput: GoogleDataplexTaskExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lakeInput`<sup>Optional</sup> <a name="lakeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lakeInput"></a>

```typescript
public readonly lakeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebookInput"></a>

```typescript
public readonly notebookInput: GoogleDataplexTaskNotebook;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.sparkInput"></a>

```typescript
public readonly sparkInput: GoogleDataplexTaskSpark;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---

##### `taskIdInput`<sup>Optional</sup> <a name="taskIdInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskIdInput"></a>

```typescript
public readonly taskIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexTaskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

---

##### `triggerSpecInput`<sup>Optional</sup> <a name="triggerSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpecInput"></a>

```typescript
public readonly triggerSpecInput: GoogleDataplexTaskTriggerSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexTaskConfig <a name="GoogleDataplexTaskConfig" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskConfig: googleDataplexTask.GoogleDataplexTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.executionSpec">executionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.triggerSpec">triggerSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lake">lake</a></code> | <code>string</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.location">location</a></code> | <code>string</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.taskId">taskId</a></code> | <code>string</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `executionSpec`<sup>Required</sup> <a name="executionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.executionSpec"></a>

```typescript
public readonly executionSpec: GoogleDataplexTaskExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#execution_spec GoogleDataplexTask#execution_spec}

---

##### `triggerSpec`<sup>Required</sup> <a name="triggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.triggerSpec"></a>

```typescript
public readonly triggerSpec: GoogleDataplexTaskTriggerSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#trigger_spec GoogleDataplexTask#trigger_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#description GoogleDataplexTask#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#display_name GoogleDataplexTask#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#labels GoogleDataplexTask#labels}

---

##### `lake`<sup>Optional</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#lake GoogleDataplexTask#lake}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#location GoogleDataplexTask#location}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.notebook"></a>

```typescript
public readonly notebook: GoogleDataplexTaskNotebook;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.spark"></a>

```typescript
public readonly spark: GoogleDataplexTaskSpark;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#spark GoogleDataplexTask#spark}

---

##### `taskId`<sup>Optional</sup> <a name="taskId" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#task_id GoogleDataplexTask#task_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexTaskTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#timeouts GoogleDataplexTask#timeouts}

---

### GoogleDataplexTaskExecutionSpec <a name="GoogleDataplexTaskExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskExecutionSpec: googleDataplexTask.GoogleDataplexTaskExecutionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Service account to use to execute a task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | The arguments to pass to the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.kmsKey">kmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.maxJobExecutionLifetime">maxJobExecutionLifetime</a></code> | <code>string</code> | The maximum duration after which the job execution is expired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.project">project</a></code> | <code>string</code> | The project in which jobs are run. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#service_account GoogleDataplexTask#service_account}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#args GoogleDataplexTask#args}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#kms_key GoogleDataplexTask#kms_key}

---

##### `maxJobExecutionLifetime`<sup>Optional</sup> <a name="maxJobExecutionLifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.maxJobExecutionLifetime"></a>

```typescript
public readonly maxJobExecutionLifetime: string;
```

- *Type:* string

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#max_job_execution_lifetime GoogleDataplexTask#max_job_execution_lifetime}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}

---

### GoogleDataplexTaskExecutionStatus <a name="GoogleDataplexTaskExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskExecutionStatus: googleDataplexTask.GoogleDataplexTaskExecutionStatus = { ... }
```


### GoogleDataplexTaskExecutionStatusLatestJob <a name="GoogleDataplexTaskExecutionStatusLatestJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskExecutionStatusLatestJob: googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob = { ... }
```


### GoogleDataplexTaskNotebook <a name="GoogleDataplexTaskNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskNotebook: googleDataplexTask.GoogleDataplexTaskNotebook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.notebook">notebook</a></code> | <code>string</code> | Path to input notebook. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.fileUris">fileUris</a></code> | <code>string[]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | infrastructure_spec block. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.notebook"></a>

```typescript
public readonly notebook: string;
```

- *Type:* string

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

##### `infrastructureSpec`<sup>Optional</sup> <a name="infrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: GoogleDataplexTaskNotebookInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

### GoogleDataplexTaskNotebookInfrastructureSpec <a name="GoogleDataplexTaskNotebookInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskNotebookInfrastructureSpec: googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.batch"></a>

```typescript
public readonly batch: GoogleDataplexTaskNotebookInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

##### `vpcNetwork`<sup>Optional</sup> <a name="vpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

### GoogleDataplexTaskNotebookInfrastructureSpecBatch <a name="GoogleDataplexTaskNotebookInfrastructureSpecBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskNotebookInfrastructureSpecBatch: googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount">executorsCount</a></code> | <code>number</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | Max configurable executors. |

---

##### `executorsCount`<sup>Optional</sup> <a name="executorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

##### `maxExecutorsCount`<sup>Optional</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

### GoogleDataplexTaskNotebookInfrastructureSpecContainerImage <a name="GoogleDataplexTaskNotebookInfrastructureSpecContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskNotebookInfrastructureSpecContainerImage: googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.image">image</a></code> | <code>string</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars">javaJars</a></code> | <code>string[]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

##### `javaJars`<sup>Optional</sup> <a name="javaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

##### `pythonPackages`<sup>Optional</sup> <a name="pythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

### GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork <a name="GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskNotebookInfrastructureSpecVpcNetwork: googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>string</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags">networkTags</a></code> | <code>string[]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork">subNetwork</a></code> | <code>string</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

##### `subNetwork`<sup>Optional</sup> <a name="subNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

### GoogleDataplexTaskSpark <a name="GoogleDataplexTaskSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskSpark: googleDataplexTask.GoogleDataplexTaskSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.fileUris">fileUris</a></code> | <code>string[]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | infrastructure_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainClass">mainClass</a></code> | <code>string</code> | The name of the driver's main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainJarFileUri">mainJarFileUri</a></code> | <code>string</code> | The Cloud Storage URI of the jar file that contains the main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.pythonScriptFile">pythonScriptFile</a></code> | <code>string</code> | The Gcloud Storage URI of the main Python file to use as the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScript">sqlScript</a></code> | <code>string</code> | The query text. The execution args are used to declare a set of script variables (set key='value';). |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScriptFile">sqlScriptFile</a></code> | <code>string</code> | A reference to a query file. |

---

##### `archiveUris`<sup>Optional</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

##### `fileUris`<sup>Optional</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

##### `infrastructureSpec`<sup>Optional</sup> <a name="infrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: GoogleDataplexTaskSparkInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#main_class GoogleDataplexTask#main_class}

---

##### `mainJarFileUri`<sup>Optional</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainJarFileUri"></a>

```typescript
public readonly mainJarFileUri: string;
```

- *Type:* string

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#main_jar_file_uri GoogleDataplexTask#main_jar_file_uri}

---

##### `pythonScriptFile`<sup>Optional</sup> <a name="pythonScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.pythonScriptFile"></a>

```typescript
public readonly pythonScriptFile: string;
```

- *Type:* string

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#python_script_file GoogleDataplexTask#python_script_file}

---

##### `sqlScript`<sup>Optional</sup> <a name="sqlScript" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScript"></a>

```typescript
public readonly sqlScript: string;
```

- *Type:* string

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#sql_script GoogleDataplexTask#sql_script}

---

##### `sqlScriptFile`<sup>Optional</sup> <a name="sqlScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScriptFile"></a>

```typescript
public readonly sqlScriptFile: string;
```

- *Type:* string

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#sql_script_file GoogleDataplexTask#sql_script_file}

---

### GoogleDataplexTaskSparkInfrastructureSpec <a name="GoogleDataplexTaskSparkInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskSparkInfrastructureSpec: googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.batch"></a>

```typescript
public readonly batch: GoogleDataplexTaskSparkInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleDataplexTaskSparkInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

##### `vpcNetwork`<sup>Optional</sup> <a name="vpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

### GoogleDataplexTaskSparkInfrastructureSpecBatch <a name="GoogleDataplexTaskSparkInfrastructureSpecBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskSparkInfrastructureSpecBatch: googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.executorsCount">executorsCount</a></code> | <code>number</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | Max configurable executors. |

---

##### `executorsCount`<sup>Optional</sup> <a name="executorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

##### `maxExecutorsCount`<sup>Optional</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

### GoogleDataplexTaskSparkInfrastructureSpecContainerImage <a name="GoogleDataplexTaskSparkInfrastructureSpecContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskSparkInfrastructureSpecContainerImage: googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.image">image</a></code> | <code>string</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars">javaJars</a></code> | <code>string[]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

##### `javaJars`<sup>Optional</sup> <a name="javaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

##### `pythonPackages`<sup>Optional</sup> <a name="pythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

### GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork <a name="GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskSparkInfrastructureSpecVpcNetwork: googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>string</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags">networkTags</a></code> | <code>string[]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork">subNetwork</a></code> | <code>string</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

##### `subNetwork`<sup>Optional</sup> <a name="subNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

### GoogleDataplexTaskTimeouts <a name="GoogleDataplexTaskTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskTimeouts: googleDataplexTask.GoogleDataplexTaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}.

---

### GoogleDataplexTaskTriggerSpec <a name="GoogleDataplexTaskTriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

const googleDataplexTaskTriggerSpec: googleDataplexTask.GoogleDataplexTaskTriggerSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.type">type</a></code> | <code>string</code> | Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent the task from executing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.maxRetries">maxRetries</a></code> | <code>number</code> | Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.schedule">schedule</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.startTime">startTime</a></code> | <code>string</code> | The first run of the task will be after this time. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#type GoogleDataplexTask#type}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#disabled GoogleDataplexTask#disabled}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#max_retries GoogleDataplexTask#max_retries}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#schedule GoogleDataplexTask#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataplex_task#start_time GoogleDataplexTask#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexTaskExecutionSpecOutputReference <a name="GoogleDataplexTaskExecutionSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime">resetMaxJobExecutionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetMaxJobExecutionLifetime` <a name="resetMaxJobExecutionLifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime"></a>

```typescript
public resetMaxJobExecutionLifetime(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.argsInput">argsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput">maxJobExecutionLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.args">args</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime">maxJobExecutionLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `maxJobExecutionLifetimeInput`<sup>Optional</sup> <a name="maxJobExecutionLifetimeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput"></a>

```typescript
public readonly maxJobExecutionLifetimeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.args"></a>

```typescript
public readonly args: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `maxJobExecutionLifetime`<sup>Required</sup> <a name="maxJobExecutionLifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime"></a>

```typescript
public readonly maxJobExecutionLifetime: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---


### GoogleDataplexTaskExecutionStatusLatestJobList <a name="GoogleDataplexTaskExecutionStatusLatestJobList" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get"></a>

```typescript
public get(index: number): GoogleDataplexTaskExecutionStatusLatestJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataplexTaskExecutionStatusLatestJobOutputReference <a name="GoogleDataplexTaskExecutionStatusLatestJobOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount">retryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob">serviceJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob">GoogleDataplexTaskExecutionStatusLatestJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceJob`<sup>Required</sup> <a name="serviceJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob"></a>

```typescript
public readonly serviceJob: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskExecutionStatusLatestJob;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob">GoogleDataplexTaskExecutionStatusLatestJob</a>

---


### GoogleDataplexTaskExecutionStatusList <a name="GoogleDataplexTaskExecutionStatusList" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskExecutionStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get"></a>

```typescript
public get(index: number): GoogleDataplexTaskExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataplexTaskExecutionStatusOutputReference <a name="GoogleDataplexTaskExecutionStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.latestJob">latestJob</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList">GoogleDataplexTaskExecutionStatusLatestJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus">GoogleDataplexTaskExecutionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestJob`<sup>Required</sup> <a name="latestJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.latestJob"></a>

```typescript
public readonly latestJob: GoogleDataplexTaskExecutionStatusLatestJobList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList">GoogleDataplexTaskExecutionStatusLatestJobList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskExecutionStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus">GoogleDataplexTaskExecutionStatus</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount">resetExecutorsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">resetMaxExecutorsCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutorsCount` <a name="resetExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```typescript
public resetExecutorsCount(): void
```

##### `resetMaxExecutorsCount` <a name="resetMaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```typescript
public resetMaxExecutorsCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput">executorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">maxExecutorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount">executorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executorsCountInput`<sup>Optional</sup> <a name="executorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```typescript
public readonly executorsCountInput: number;
```

- *Type:* number

---

##### `maxExecutorsCountInput`<sup>Optional</sup> <a name="maxExecutorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```typescript
public readonly maxExecutorsCountInput: number;
```

- *Type:* number

---

##### `executorsCount`<sup>Required</sup> <a name="executorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

---

##### `maxExecutorsCount`<sup>Required</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskNotebookInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars">resetJavaJars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages">resetPythonPackages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetJavaJars` <a name="resetJavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```typescript
public resetJavaJars(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetPythonPackages` <a name="resetPythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```typescript
public resetPythonPackages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">javaJarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">pythonPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars">javaJars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `javaJarsInput`<sup>Optional</sup> <a name="javaJarsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```typescript
public readonly javaJarsInput: string[];
```

- *Type:* string[]

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackagesInput`<sup>Optional</sup> <a name="pythonPackagesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```typescript
public readonly pythonPackagesInput: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `javaJars`<sup>Required</sup> <a name="javaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch">putBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork">putVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch">resetBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork">resetVpcNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatch` <a name="putBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch"></a>

```typescript
public putBatch(value: GoogleDataplexTaskNotebookInfrastructureSpecBatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage"></a>

```typescript
public putContainerImage(value: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `putVpcNetwork` <a name="putVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork"></a>

```typescript
public putVpcNetwork(value: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `resetBatch` <a name="resetBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch"></a>

```typescript
public resetBatch(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetVpcNetwork` <a name="resetVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```typescript
public resetVpcNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput">batchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput">vpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batch"></a>

```typescript
public readonly batch: GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpcNetwork`<sup>Required</sup> <a name="vpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput"></a>

```typescript
public readonly batchInput: GoogleDataplexTaskNotebookInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `vpcNetworkInput`<sup>Optional</sup> <a name="vpcNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```typescript
public readonly vpcNetworkInput: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskNotebookInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">resetSubNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```typescript
public resetNetworkTags(): void
```

##### `resetSubNetwork` <a name="resetSubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```typescript
public resetSubNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">subNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags">networkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">subNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```typescript
public readonly networkTagsInput: string[];
```

- *Type:* string[]

---

##### `subNetworkInput`<sup>Optional</sup> <a name="subNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```typescript
public readonly subNetworkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

---

##### `subNetwork`<sup>Required</sup> <a name="subNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---


### GoogleDataplexTaskNotebookOutputReference <a name="GoogleDataplexTaskNotebookOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskNotebookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec">putInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetInfrastructureSpec">resetInfrastructureSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfrastructureSpec` <a name="putInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec"></a>

```typescript
public putInfrastructureSpec(value: GoogleDataplexTaskNotebookInfrastructureSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetArchiveUris"></a>

```typescript
public resetArchiveUris(): void
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetFileUris"></a>

```typescript
public resetFileUris(): void
```

##### `resetInfrastructureSpec` <a name="resetInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetInfrastructureSpec"></a>

```typescript
public resetInfrastructureSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpecInput">infrastructureSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebookInput">notebookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUris">fileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebook">notebook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureSpec`<sup>Required</sup> <a name="infrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: GoogleDataplexTaskNotebookInfrastructureSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUrisInput"></a>

```typescript
public readonly archiveUrisInput: string[];
```

- *Type:* string[]

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUrisInput"></a>

```typescript
public readonly fileUrisInput: string[];
```

- *Type:* string[]

---

##### `infrastructureSpecInput`<sup>Optional</sup> <a name="infrastructureSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpecInput"></a>

```typescript
public readonly infrastructureSpecInput: GoogleDataplexTaskNotebookInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebookInput"></a>

```typescript
public readonly notebookInput: string;
```

- *Type:* string

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebook"></a>

```typescript
public readonly notebook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskNotebook;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount">resetExecutorsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">resetMaxExecutorsCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutorsCount` <a name="resetExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```typescript
public resetExecutorsCount(): void
```

##### `resetMaxExecutorsCount` <a name="resetMaxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```typescript
public resetMaxExecutorsCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput">executorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">maxExecutorsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount">executorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">maxExecutorsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executorsCountInput`<sup>Optional</sup> <a name="executorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```typescript
public readonly executorsCountInput: number;
```

- *Type:* number

---

##### `maxExecutorsCountInput`<sup>Optional</sup> <a name="maxExecutorsCountInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```typescript
public readonly maxExecutorsCountInput: number;
```

- *Type:* number

---

##### `executorsCount`<sup>Required</sup> <a name="executorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```typescript
public readonly executorsCount: number;
```

- *Type:* number

---

##### `maxExecutorsCount`<sup>Required</sup> <a name="maxExecutorsCount" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```typescript
public readonly maxExecutorsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskSparkInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars">resetJavaJars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages">resetPythonPackages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetJavaJars` <a name="resetJavaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```typescript
public resetJavaJars(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetPythonPackages` <a name="resetPythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```typescript
public resetPythonPackages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">javaJarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">pythonPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars">javaJars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages">pythonPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `javaJarsInput`<sup>Optional</sup> <a name="javaJarsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```typescript
public readonly javaJarsInput: string[];
```

- *Type:* string[]

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackagesInput`<sup>Optional</sup> <a name="pythonPackagesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```typescript
public readonly pythonPackagesInput: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `javaJars`<sup>Required</sup> <a name="javaJars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```typescript
public readonly javaJars: string[];
```

- *Type:* string[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskSparkInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch">putBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork">putVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetBatch">resetBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork">resetVpcNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatch` <a name="putBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch"></a>

```typescript
public putBatch(value: GoogleDataplexTaskSparkInfrastructureSpecBatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage"></a>

```typescript
public putContainerImage(value: GoogleDataplexTaskSparkInfrastructureSpecContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `putVpcNetwork` <a name="putVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork"></a>

```typescript
public putVpcNetwork(value: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `resetBatch` <a name="resetBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetBatch"></a>

```typescript
public resetBatch(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetVpcNetwork` <a name="resetVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```typescript
public resetVpcNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference">GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork">vpcNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput">batchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput">vpcNetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batch"></a>

```typescript
public readonly batch: GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference">GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage"></a>

```typescript
public readonly containerImage: GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpcNetwork`<sup>Required</sup> <a name="vpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```typescript
public readonly vpcNetwork: GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput"></a>

```typescript
public readonly batchInput: GoogleDataplexTaskSparkInfrastructureSpecBatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: GoogleDataplexTaskSparkInfrastructureSpecContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `vpcNetworkInput`<sup>Optional</sup> <a name="vpcNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```typescript
public readonly vpcNetworkInput: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskSparkInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">resetSubNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```typescript
public resetNetworkTags(): void
```

##### `resetSubNetwork` <a name="resetSubNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```typescript
public resetSubNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">networkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">subNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags">networkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">subNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```typescript
public readonly networkTagsInput: string[];
```

- *Type:* string[]

---

##### `subNetworkInput`<sup>Optional</sup> <a name="subNetworkInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```typescript
public readonly subNetworkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

---

##### `subNetwork`<sup>Required</sup> <a name="subNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```typescript
public readonly subNetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---


### GoogleDataplexTaskSparkOutputReference <a name="GoogleDataplexTaskSparkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec">putInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetArchiveUris">resetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetFileUris">resetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetInfrastructureSpec">resetInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainJarFileUri">resetMainJarFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetPythonScriptFile">resetPythonScriptFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScript">resetSqlScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScriptFile">resetSqlScriptFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInfrastructureSpec` <a name="putInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec"></a>

```typescript
public putInfrastructureSpec(value: GoogleDataplexTaskSparkInfrastructureSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---

##### `resetArchiveUris` <a name="resetArchiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetArchiveUris"></a>

```typescript
public resetArchiveUris(): void
```

##### `resetFileUris` <a name="resetFileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetFileUris"></a>

```typescript
public resetFileUris(): void
```

##### `resetInfrastructureSpec` <a name="resetInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetInfrastructureSpec"></a>

```typescript
public resetInfrastructureSpec(): void
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainClass"></a>

```typescript
public resetMainClass(): void
```

##### `resetMainJarFileUri` <a name="resetMainJarFileUri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainJarFileUri"></a>

```typescript
public resetMainJarFileUri(): void
```

##### `resetPythonScriptFile` <a name="resetPythonScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetPythonScriptFile"></a>

```typescript
public resetPythonScriptFile(): void
```

##### `resetSqlScript` <a name="resetSqlScript" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScript"></a>

```typescript
public resetSqlScript(): void
```

##### `resetSqlScriptFile` <a name="resetSqlScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScriptFile"></a>

```typescript
public resetSqlScriptFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpec">infrastructureSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference">GoogleDataplexTaskSparkInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUrisInput">archiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUrisInput">fileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpecInput">infrastructureSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUriInput">mainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFileInput">pythonScriptFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFileInput">sqlScriptFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptInput">sqlScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUris">archiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUris">fileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClass">mainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUri">mainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFile">pythonScriptFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScript">sqlScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFile">sqlScriptFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `infrastructureSpec`<sup>Required</sup> <a name="infrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpec"></a>

```typescript
public readonly infrastructureSpec: GoogleDataplexTaskSparkInfrastructureSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference">GoogleDataplexTaskSparkInfrastructureSpecOutputReference</a>

---

##### `archiveUrisInput`<sup>Optional</sup> <a name="archiveUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUrisInput"></a>

```typescript
public readonly archiveUrisInput: string[];
```

- *Type:* string[]

---

##### `fileUrisInput`<sup>Optional</sup> <a name="fileUrisInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUrisInput"></a>

```typescript
public readonly fileUrisInput: string[];
```

- *Type:* string[]

---

##### `infrastructureSpecInput`<sup>Optional</sup> <a name="infrastructureSpecInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpecInput"></a>

```typescript
public readonly infrastructureSpecInput: GoogleDataplexTaskSparkInfrastructureSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClassInput"></a>

```typescript
public readonly mainClassInput: string;
```

- *Type:* string

---

##### `mainJarFileUriInput`<sup>Optional</sup> <a name="mainJarFileUriInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUriInput"></a>

```typescript
public readonly mainJarFileUriInput: string;
```

- *Type:* string

---

##### `pythonScriptFileInput`<sup>Optional</sup> <a name="pythonScriptFileInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFileInput"></a>

```typescript
public readonly pythonScriptFileInput: string;
```

- *Type:* string

---

##### `sqlScriptFileInput`<sup>Optional</sup> <a name="sqlScriptFileInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFileInput"></a>

```typescript
public readonly sqlScriptFileInput: string;
```

- *Type:* string

---

##### `sqlScriptInput`<sup>Optional</sup> <a name="sqlScriptInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptInput"></a>

```typescript
public readonly sqlScriptInput: string;
```

- *Type:* string

---

##### `archiveUris`<sup>Required</sup> <a name="archiveUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUris"></a>

```typescript
public readonly archiveUris: string[];
```

- *Type:* string[]

---

##### `fileUris`<sup>Required</sup> <a name="fileUris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUris"></a>

```typescript
public readonly fileUris: string[];
```

- *Type:* string[]

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClass"></a>

```typescript
public readonly mainClass: string;
```

- *Type:* string

---

##### `mainJarFileUri`<sup>Required</sup> <a name="mainJarFileUri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUri"></a>

```typescript
public readonly mainJarFileUri: string;
```

- *Type:* string

---

##### `pythonScriptFile`<sup>Required</sup> <a name="pythonScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFile"></a>

```typescript
public readonly pythonScriptFile: string;
```

- *Type:* string

---

##### `sqlScript`<sup>Required</sup> <a name="sqlScript" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScript"></a>

```typescript
public readonly sqlScript: string;
```

- *Type:* string

---

##### `sqlScriptFile`<sup>Required</sup> <a name="sqlScriptFile" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFile"></a>

```typescript
public readonly sqlScriptFile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskSpark;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---


### GoogleDataplexTaskTimeoutsOutputReference <a name="GoogleDataplexTaskTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexTaskTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

---


### GoogleDataplexTaskTriggerSpecOutputReference <a name="GoogleDataplexTaskTriggerSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexTask } from '@cdktf/provider-google-beta'

new googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexTaskTriggerSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---



