# `googleDialogflowEncryptionSpec` Submodule <a name="`googleDialogflowEncryptionSpec` Submodule" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEncryptionSpec <a name="GoogleDialogflowEncryptionSpec" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec google_dialogflow_encryption_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

new googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec(scope: Construct, id: string, config: GoogleDialogflowEncryptionSpecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig">GoogleDialogflowEncryptionSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig">GoogleDialogflowEncryptionSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleDialogflowEncryptionSpecEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowEncryptionSpecTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowEncryptionSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDialogflowEncryptionSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowEncryptionSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowEncryptionSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEncryptionSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference">GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference">GoogleDialogflowEncryptionSpecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference">GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowEncryptionSpecTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference">GoogleDialogflowEncryptionSpecTimeoutsOutputReference</a>

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleDialogflowEncryptionSpecEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowEncryptionSpecTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEncryptionSpecConfig <a name="GoogleDialogflowEncryptionSpecConfig" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.Initializer"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

const googleDialogflowEncryptionSpecConfig: googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.location">location</a></code> | <code>string</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#id GoogleDialogflowEncryptionSpec#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#project GoogleDialogflowEncryptionSpec#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleDialogflowEncryptionSpecEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#encryption_spec GoogleDialogflowEncryptionSpec#encryption_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#location GoogleDialogflowEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#id GoogleDialogflowEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#project GoogleDialogflowEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowEncryptionSpecTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#timeouts GoogleDialogflowEncryptionSpec#timeouts}

---

### GoogleDialogflowEncryptionSpecEncryptionSpec <a name="GoogleDialogflowEncryptionSpecEncryptionSpec" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec.Initializer"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

const googleDialogflowEncryptionSpecEncryptionSpec: googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec.property.kmsKey">kmsKey</a></code> | <code>string</code> | The name of customer-managed encryption key that is used to secure a resource and its sub-resources. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The name of customer-managed encryption key that is used to secure a resource and its sub-resources.

If empty, the resource is secured by the default Google encryption key.
Only the key in the same location as this resource is allowed to be used for encryption.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#kms_key GoogleDialogflowEncryptionSpec#kms_key}

---

### GoogleDialogflowEncryptionSpecTimeouts <a name="GoogleDialogflowEncryptionSpecTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.Initializer"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

const googleDialogflowEncryptionSpecTimeouts: googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#create GoogleDialogflowEncryptionSpec#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#delete GoogleDialogflowEncryptionSpec#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#create GoogleDialogflowEncryptionSpec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_encryption_spec#delete GoogleDialogflowEncryptionSpec#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference <a name="GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

new googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowEncryptionSpecEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

---


### GoogleDialogflowEncryptionSpecTimeoutsOutputReference <a name="GoogleDialogflowEncryptionSpecTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEncryptionSpec } from '@cdktf/provider-google-beta'

new googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEncryptionSpecTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

---



