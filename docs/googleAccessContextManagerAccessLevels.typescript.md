# `googleAccessContextManagerAccessLevels` Submodule <a name="`googleAccessContextManagerAccessLevels` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevels <a name="GoogleAccessContextManagerAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels google_access_context_manager_access_levels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels(scope: Construct, id: string, config: GoogleAccessContextManagerAccessLevelsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig">GoogleAccessContextManagerAccessLevelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig">GoogleAccessContextManagerAccessLevelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels">putAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLevels` <a name="putAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels"></a>

```typescript
public putAccessLevels(value: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAccessContextManagerAccessLevelsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetAccessLevels"></a>

```typescript
public resetAccessLevels(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerAccessLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevels">accessLevels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList">GoogleAccessContextManagerAccessLevelsAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevelsInput">accessLevelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevels"></a>

```typescript
public readonly accessLevels: GoogleAccessContextManagerAccessLevelsAccessLevelsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList">GoogleAccessContextManagerAccessLevelsAccessLevelsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevelsInput"></a>

```typescript
public readonly accessLevelsInput: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAccessContextManagerAccessLevelsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelsAccessLevels <a name="GoogleAccessContextManagerAccessLevelsAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevels: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.name">name</a></code> | <code>string</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.title">title</a></code> | <code>string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.description">description</a></code> | <code>string</code> | Description of the AccessLevel and its use. Does not affect behavior. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#name GoogleAccessContextManagerAccessLevels#name}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.basic"></a>

```typescript
public readonly basic: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#basic GoogleAccessContextManagerAccessLevels#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.custom"></a>

```typescript
public readonly custom: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#custom GoogleAccessContextManagerAccessLevels#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasic <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsBasic: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction">combiningFunction</a></code> | <code>string</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#conditions GoogleAccessContextManagerAccessLevels#conditions}

---

##### `combiningFunction`<sup>Optional</sup> <a name="combiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction"></a>

```typescript
public readonly combiningFunction: string;
```

- *Type:* string

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#combining_function GoogleAccessContextManagerAccessLevels#combining_function}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsBasicConditions: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks">ipSubnetworks</a></code> | <code>string[]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members">members</a></code> | <code>string[]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions">regions</a></code> | <code>string[]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>string[]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]</code> | vpc_network_sources block. |

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#device_policy GoogleAccessContextManagerAccessLevels#device_policy}

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks"></a>

```typescript
public readonly ipSubnetworks: string[];
```

- *Type:* string[]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#ip_subnetworks GoogleAccessContextManagerAccessLevels#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#members GoogleAccessContextManagerAccessLevels#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#negate GoogleAccessContextManagerAccessLevels#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#regions GoogleAccessContextManagerAccessLevels#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels"></a>

```typescript
public readonly requiredAccessLevels: string[];
```

- *Type:* string[]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#required_access_levels GoogleAccessContextManagerAccessLevels#required_access_levels}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#vpc_network_sources GoogleAccessContextManagerAccessLevels#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>string[]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>string[]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints">osConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval">requireAdminApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned">requireCorpOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock">requireScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowedDeviceManagementLevels`<sup>Optional</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```typescript
public readonly allowedDeviceManagementLevels: string[];
```

- *Type:* string[]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#allowed_device_management_levels GoogleAccessContextManagerAccessLevels#allowed_device_management_levels}

---

##### `allowedEncryptionStatuses`<sup>Optional</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```typescript
public readonly allowedEncryptionStatuses: string[];
```

- *Type:* string[]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#allowed_encryption_statuses GoogleAccessContextManagerAccessLevels#allowed_encryption_statuses}

---

##### `osConstraints`<sup>Optional</sup> <a name="osConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints"></a>

```typescript
public readonly osConstraints: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#os_constraints GoogleAccessContextManagerAccessLevels#os_constraints}

---

##### `requireAdminApproval`<sup>Optional</sup> <a name="requireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```typescript
public readonly requireAdminApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#require_admin_approval GoogleAccessContextManagerAccessLevels#require_admin_approval}

---

##### `requireCorpOwned`<sup>Optional</sup> <a name="requireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```typescript
public readonly requireCorpOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#require_corp_owned GoogleAccessContextManagerAccessLevels#require_corp_owned}

---

##### `requireScreenLock`<sup>Optional</sup> <a name="requireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```typescript
public readonly requireScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#require_screen_lock GoogleAccessContextManagerAccessLevels#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType">osType</a></code> | <code>string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | The minimum allowed OS version. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#os_type GoogleAccessContextManagerAccessLevels#os_type}

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#minimum_version GoogleAccessContextManagerAccessLevels#minimum_version}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpcSubnetwork`<sup>Optional</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```typescript
public readonly vpcSubnetwork: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#vpc_subnetwork GoogleAccessContextManagerAccessLevels#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>string[]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#network GoogleAccessContextManagerAccessLevels#network}

---

##### `vpcIpSubnetworks`<sup>Optional</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```typescript
public readonly vpcIpSubnetworks: string[];
```

- *Type:* string[]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevels#vpc_ip_subnetworks}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsCustom <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsCustom: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | expr block. |

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.property.expr"></a>

```typescript
public readonly expr: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#expr GoogleAccessContextManagerAccessLevels#expr}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsAccessLevelsCustomExpr: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#expression GoogleAccessContextManagerAccessLevels#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#location GoogleAccessContextManagerAccessLevels#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---

### GoogleAccessContextManagerAccessLevelsConfig <a name="GoogleAccessContextManagerAccessLevelsConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsConfig: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.parent">parent</a></code> | <code>string</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.accessLevels">accessLevels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]</code> | access_levels block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#parent GoogleAccessContextManagerAccessLevels#parent}

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.accessLevels"></a>

```typescript
public readonly accessLevels: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#access_levels GoogleAccessContextManagerAccessLevels#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerAccessLevelsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#timeouts GoogleAccessContextManagerAccessLevels#timeouts}

---

### GoogleAccessContextManagerAccessLevelsTimeouts <a name="GoogleAccessContextManagerAccessLevelsTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelsTimeouts: googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```typescript
public resetMinimumVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```typescript
public readonly minimumVersionInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints">putOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">resetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">resetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints">resetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">resetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">resetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">resetRequireScreenLock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsConstraints` <a name="putOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```typescript
public putOsConstraints(value: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]

---

##### `resetAllowedDeviceManagementLevels` <a name="resetAllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```typescript
public resetAllowedDeviceManagementLevels(): void
```

##### `resetAllowedEncryptionStatuses` <a name="resetAllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```typescript
public resetAllowedEncryptionStatuses(): void
```

##### `resetOsConstraints` <a name="resetOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```typescript
public resetOsConstraints(): void
```

##### `resetRequireAdminApproval` <a name="resetRequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```typescript
public resetRequireAdminApproval(): void
```

##### `resetRequireCorpOwned` <a name="resetRequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```typescript
public resetRequireCorpOwned(): void
```

##### `resetRequireScreenLock` <a name="resetRequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```typescript
public resetRequireScreenLock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints">osConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowedDeviceManagementLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowedEncryptionStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">osConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">requireAdminApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">requireCorpOwnedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">requireScreenLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">requireAdminApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">requireCorpOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">requireScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osConstraints`<sup>Required</sup> <a name="osConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```typescript
public readonly osConstraints: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `allowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="allowedDeviceManagementLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```typescript
public readonly allowedDeviceManagementLevelsInput: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionStatusesInput`<sup>Optional</sup> <a name="allowedEncryptionStatusesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```typescript
public readonly allowedEncryptionStatusesInput: string[];
```

- *Type:* string[]

---

##### `osConstraintsInput`<sup>Optional</sup> <a name="osConstraintsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```typescript
public readonly osConstraintsInput: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints</a>[]

---

##### `requireAdminApprovalInput`<sup>Optional</sup> <a name="requireAdminApprovalInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```typescript
public readonly requireAdminApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCorpOwnedInput`<sup>Optional</sup> <a name="requireCorpOwnedInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```typescript
public readonly requireCorpOwnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireScreenLockInput`<sup>Optional</sup> <a name="requireScreenLockInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```typescript
public readonly requireScreenLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDeviceManagementLevels`<sup>Required</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```typescript
public readonly allowedDeviceManagementLevels: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionStatuses`<sup>Required</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```typescript
public readonly allowedEncryptionStatuses: string[];
```

- *Type:* string[]

---

##### `requireAdminApproval`<sup>Required</sup> <a name="requireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```typescript
public readonly requireAdminApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCorpOwned`<sup>Required</sup> <a name="requireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```typescript
public readonly requireCorpOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireScreenLock`<sup>Required</sup> <a name="requireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```typescript
public readonly requireScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources">putVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy">resetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks">resetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels">resetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources">resetVpcNetworkSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevicePolicy` <a name="putDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy"></a>

```typescript
public putDevicePolicy(value: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `putVpcNetworkSources` <a name="putVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources"></a>

```typescript
public putVpcNetworkSources(value: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]

---

##### `resetDevicePolicy` <a name="resetDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy"></a>

```typescript
public resetDevicePolicy(): void
```

##### `resetIpSubnetworks` <a name="resetIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks"></a>

```typescript
public resetIpSubnetworks(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRequiredAccessLevels` <a name="resetRequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```typescript
public resetRequiredAccessLevels(): void
```

##### `resetVpcNetworkSources` <a name="resetVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```typescript
public resetVpcNetworkSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput">ipSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput">requiredAccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput">vpcNetworkSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks">ipSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a>

---

##### `vpcNetworkSources`<sup>Required</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a>

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput"></a>

```typescript
public readonly devicePolicyInput: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `ipSubnetworksInput`<sup>Optional</sup> <a name="ipSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```typescript
public readonly ipSubnetworksInput: string[];
```

- *Type:* string[]

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `requiredAccessLevelsInput`<sup>Optional</sup> <a name="requiredAccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```typescript
public readonly requiredAccessLevelsInput: string[];
```

- *Type:* string[]

---

##### `vpcNetworkSourcesInput`<sup>Optional</sup> <a name="vpcNetworkSourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```typescript
public readonly vpcNetworkSourcesInput: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]

---

##### `ipSubnetworks`<sup>Required</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks"></a>

```typescript
public readonly ipSubnetworks: string[];
```

- *Type:* string[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requiredAccessLevels`<sup>Required</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```typescript
public readonly requiredAccessLevels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>[]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">putVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">resetVpcSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcSubnetwork` <a name="putVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```typescript
public putVpcSubnetwork(value: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `resetVpcSubnetwork` <a name="resetVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```typescript
public resetVpcSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcSubnetwork`<sup>Required</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```typescript
public readonly vpcSubnetwork: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpcSubnetworkInput`<sup>Optional</sup> <a name="vpcSubnetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```typescript
public readonly vpcSubnetworkInput: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">resetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcIpSubnetworks` <a name="resetVpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```typescript
public resetVpcIpSubnetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpcIpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `vpcIpSubnetworksInput`<sup>Optional</sup> <a name="vpcIpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```typescript
public readonly vpcIpSubnetworksInput: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `vpcIpSubnetworks`<sup>Required</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```typescript
public readonly vpcIpSubnetworks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction">resetCombiningFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]

---

##### `resetCombiningFunction` <a name="resetCombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction"></a>

```typescript
public resetCombiningFunction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput">combiningFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction">combiningFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a>

---

##### `combiningFunctionInput`<sup>Optional</sup> <a name="combiningFunctionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput"></a>

```typescript
public readonly combiningFunctionInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions</a>[]

---

##### `combiningFunction`<sup>Required</sup> <a name="combiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction"></a>

```typescript
public readonly combiningFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr">putExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr"></a>

```typescript
public putExpr(value: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr"></a>

```typescript
public readonly expr: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput"></a>

```typescript
public readonly exprInput: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>[]

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic"></a>

```typescript
public putBasic(value: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `putCustom` <a name="putCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom"></a>

```typescript
public putCustom(value: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic"></a>

```typescript
public resetBasic(): void
```

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput">customInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic"></a>

```typescript
public readonly basic: GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom"></a>

```typescript
public readonly custom: GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput"></a>

```typescript
public readonly basicInput: GoogleAccessContextManagerAccessLevelsAccessLevelsBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput"></a>

```typescript
public readonly customInput: GoogleAccessContextManagerAccessLevelsAccessLevelsCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsAccessLevels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels">GoogleAccessContextManagerAccessLevelsAccessLevels</a>

---


### GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevels } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

---



