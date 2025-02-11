# `googleColabRuntime` Submodule <a name="`googleColabRuntime` Submodule" id="@cdktf/provider-google-beta.googleColabRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntime <a name="GoogleColabRuntime" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime google_colab_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

new googleColabRuntime.GoogleColabRuntime(scope: Construct, id: string, config: GoogleColabRuntimeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig">GoogleColabRuntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig">GoogleColabRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putNotebookRuntimeTemplateRef">putNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetAutoUpgrade">resetAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetNotebookRuntimeTemplateRef">resetNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotebookRuntimeTemplateRef` <a name="putNotebookRuntimeTemplateRef" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putNotebookRuntimeTemplateRef"></a>

```typescript
public putNotebookRuntimeTemplateRef(value: GoogleColabRuntimeNotebookRuntimeTemplateRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putNotebookRuntimeTemplateRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleColabRuntimeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

---

##### `resetAutoUpgrade` <a name="resetAutoUpgrade" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetAutoUpgrade"></a>

```typescript
public resetAutoUpgrade(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNotebookRuntimeTemplateRef` <a name="resetNotebookRuntimeTemplateRef" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetNotebookRuntimeTemplateRef"></a>

```typescript
public resetNotebookRuntimeTemplateRef(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isConstruct"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

googleColabRuntime.GoogleColabRuntime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformElement"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

googleColabRuntime.GoogleColabRuntime.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformResource"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

googleColabRuntime.GoogleColabRuntime.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

googleColabRuntime.GoogleColabRuntime.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleColabRuntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleColabRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleColabRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.isUpgradable">isUpgradable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRef">notebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference">GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeType">notebookRuntimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference">GoogleColabRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgradeInput">autoUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRefInput">notebookRuntimeTemplateRefInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUserInput">runtimeUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgrade">autoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUser">runtimeUser</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `isUpgradable`<sup>Required</sup> <a name="isUpgradable" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.isUpgradable"></a>

```typescript
public readonly isUpgradable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notebookRuntimeTemplateRef`<sup>Required</sup> <a name="notebookRuntimeTemplateRef" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRef"></a>

```typescript
public readonly notebookRuntimeTemplateRef: GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference">GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference</a>

---

##### `notebookRuntimeType`<sup>Required</sup> <a name="notebookRuntimeType" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeType"></a>

```typescript
public readonly notebookRuntimeType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleColabRuntimeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference">GoogleColabRuntimeTimeoutsOutputReference</a>

---

##### `autoUpgradeInput`<sup>Optional</sup> <a name="autoUpgradeInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgradeInput"></a>

```typescript
public readonly autoUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateRefInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateRefInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.notebookRuntimeTemplateRefInput"></a>

```typescript
public readonly notebookRuntimeTemplateRefInput: GoogleColabRuntimeNotebookRuntimeTemplateRef;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeUserInput`<sup>Optional</sup> <a name="runtimeUserInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUserInput"></a>

```typescript
public readonly runtimeUserInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleColabRuntimeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

---

##### `autoUpgrade`<sup>Required</sup> <a name="autoUpgrade" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.autoUpgrade"></a>

```typescript
public readonly autoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtimeUser`<sup>Required</sup> <a name="runtimeUser" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.runtimeUser"></a>

```typescript
public readonly runtimeUser: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntime.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeConfig <a name="GoogleColabRuntimeConfig" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.Initializer"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

const googleColabRuntimeConfig: googleColabRuntime.GoogleColabRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the Runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.location">location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.runtimeUser">runtimeUser</a></code> | <code>string</code> | The user email of the NotebookRuntime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.autoUpgrade">autoUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Triggers an upgrade anytime the runtime is started if it is upgradable. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.description">description</a></code> | <code>string</code> | The description of the Runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the Colab Runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#id GoogleColabRuntime#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.name">name</a></code> | <code>string</code> | The resource name of the Runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.notebookRuntimeTemplateRef">notebookRuntimeTemplateRef</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | notebook_runtime_template_ref block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#project GoogleColabRuntime#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#display_name GoogleColabRuntime#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#location GoogleColabRuntime#location}

---

##### `runtimeUser`<sup>Required</sup> <a name="runtimeUser" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.runtimeUser"></a>

```typescript
public readonly runtimeUser: string;
```

- *Type:* string

The user email of the NotebookRuntime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#runtime_user GoogleColabRuntime#runtime_user}

---

##### `autoUpgrade`<sup>Optional</sup> <a name="autoUpgrade" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.autoUpgrade"></a>

```typescript
public readonly autoUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Triggers an upgrade anytime the runtime is started if it is upgradable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#auto_upgrade GoogleColabRuntime#auto_upgrade}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#description GoogleColabRuntime#description}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the Colab Runtime.

Set this field to 'RUNNING' to start the runtime, and 'STOPPED' to stop it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#desired_state GoogleColabRuntime#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#id GoogleColabRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#name GoogleColabRuntime#name}

---

##### `notebookRuntimeTemplateRef`<sup>Optional</sup> <a name="notebookRuntimeTemplateRef" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.notebookRuntimeTemplateRef"></a>

```typescript
public readonly notebookRuntimeTemplateRef: GoogleColabRuntimeNotebookRuntimeTemplateRef;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

notebook_runtime_template_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#notebook_runtime_template_ref GoogleColabRuntime#notebook_runtime_template_ref}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#project GoogleColabRuntime#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleColabRuntimeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#timeouts GoogleColabRuntime#timeouts}

---

### GoogleColabRuntimeNotebookRuntimeTemplateRef <a name="GoogleColabRuntimeNotebookRuntimeTemplateRef" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef.Initializer"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

const googleColabRuntimeNotebookRuntimeTemplateRef: googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate">notebookRuntimeTemplate</a></code> | <code>string</code> | The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created. |

---

##### `notebookRuntimeTemplate`<sup>Required</sup> <a name="notebookRuntimeTemplate" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef.property.notebookRuntimeTemplate"></a>

```typescript
public readonly notebookRuntimeTemplate: string;
```

- *Type:* string

The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#notebook_runtime_template GoogleColabRuntime#notebook_runtime_template}

---

### GoogleColabRuntimeTimeouts <a name="GoogleColabRuntimeTimeouts" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.Initializer"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

const googleColabRuntimeTimeouts: googleColabRuntime.GoogleColabRuntimeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#create GoogleColabRuntime#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#delete GoogleColabRuntime#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#update GoogleColabRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#create GoogleColabRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#delete GoogleColabRuntime#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime#update GoogleColabRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference <a name="GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

new googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput">notebookRuntimeTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate">notebookRuntimeTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplateInput"></a>

```typescript
public readonly notebookRuntimeTemplateInput: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplate`<sup>Required</sup> <a name="notebookRuntimeTemplate" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.notebookRuntimeTemplate"></a>

```typescript
public readonly notebookRuntimeTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeNotebookRuntimeTemplateRef;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeNotebookRuntimeTemplateRef">GoogleColabRuntimeNotebookRuntimeTemplateRef</a>

---


### GoogleColabRuntimeTimeoutsOutputReference <a name="GoogleColabRuntimeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleColabRuntime } from '@cdktf/provider-google-beta'

new googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleColabRuntimeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntime.GoogleColabRuntimeTimeouts">GoogleColabRuntimeTimeouts</a>

---



