# `googleComposerUserWorkloadsSecret` Submodule <a name="`googleComposerUserWorkloadsSecret` Submodule" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComposerUserWorkloadsSecret <a name="GoogleComposerUserWorkloadsSecret" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret google_composer_user_workloads_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

new googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret(scope: Construct, id: string, config: GoogleComposerUserWorkloadsSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig">GoogleComposerUserWorkloadsSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig">GoogleComposerUserWorkloadsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComposerUserWorkloadsSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a>

---

##### `resetData` <a name="resetData" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetData"></a>

```typescript
public resetData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isConstruct"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformElement"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformResource"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComposerUserWorkloadsSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComposerUserWorkloadsSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComposerUserWorkloadsSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference">GoogleComposerUserWorkloadsSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComposerUserWorkloadsSecretTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference">GoogleComposerUserWorkloadsSecretTimeoutsOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComposerUserWorkloadsSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComposerUserWorkloadsSecretConfig <a name="GoogleComposerUserWorkloadsSecretConfig" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

const googleComposerUserWorkloadsSecretConfig: googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.environment">environment</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.name">name</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | A map of the secret data. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#id GoogleComposerUserWorkloadsSecret#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#environment GoogleComposerUserWorkloadsSecret#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#name GoogleComposerUserWorkloadsSecret#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of the secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#data GoogleComposerUserWorkloadsSecret#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#id GoogleComposerUserWorkloadsSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#project GoogleComposerUserWorkloadsSecret#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#region GoogleComposerUserWorkloadsSecret#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComposerUserWorkloadsSecretTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#timeouts GoogleComposerUserWorkloadsSecret#timeouts}

---

### GoogleComposerUserWorkloadsSecretTimeouts <a name="GoogleComposerUserWorkloadsSecretTimeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

const googleComposerUserWorkloadsSecretTimeouts: googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#create GoogleComposerUserWorkloadsSecret#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#delete GoogleComposerUserWorkloadsSecret#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#update GoogleComposerUserWorkloadsSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#create GoogleComposerUserWorkloadsSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#delete GoogleComposerUserWorkloadsSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_composer_user_workloads_secret#update GoogleComposerUserWorkloadsSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComposerUserWorkloadsSecretTimeoutsOutputReference <a name="GoogleComposerUserWorkloadsSecretTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsSecret } from '@cdktf/provider-google-beta'

new googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerUserWorkloadsSecretTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsSecret.GoogleComposerUserWorkloadsSecretTimeouts">GoogleComposerUserWorkloadsSecretTimeouts</a>

---



