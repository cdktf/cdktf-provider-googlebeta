# `googleIamWorkforcePoolProviderKey` Submodule <a name="`googleIamWorkforcePoolProviderKey` Submodule" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProviderKey <a name="GoogleIamWorkforcePoolProviderKey" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey(scope: Construct, id: string, config: GoogleIamWorkforcePoolProviderKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig">GoogleIamWorkforcePoolProviderKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig">GoogleIamWorkforcePoolProviderKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData">putKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyData` <a name="putKeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData"></a>

```typescript
public putKeyData(value: GoogleIamWorkforcePoolProviderKeyKeyData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putKeyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamWorkforcePoolProviderKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkforcePoolProviderKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkforcePoolProviderKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProviderKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference">GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference">GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyDataInput">keyDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.useInput">useInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.use">use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyData"></a>

```typescript
public readonly keyData: GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference">GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference">GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyDataInput`<sup>Optional</sup> <a name="keyDataInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyDataInput"></a>

```typescript
public readonly keyDataInput: GoogleIamWorkforcePoolProviderKeyKeyData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamWorkforcePoolProviderKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---

##### `useInput`<sup>Optional</sup> <a name="useInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.useInput"></a>

```typescript
public readonly useInput: string;
```

- *Type:* string

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderKeyConfig <a name="GoogleIamWorkforcePoolProviderKeyConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderKeyConfig: googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.use">use</a></code> | <code>string</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyData"></a>

```typescript
public readonly keyData: GoogleIamWorkforcePoolProviderKeyKeyData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#key_data GoogleIamWorkforcePoolProviderKey#key_data}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#key_id GoogleIamWorkforcePoolProviderKey#key_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#location GoogleIamWorkforcePoolProviderKey#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#provider_id GoogleIamWorkforcePoolProviderKey#provider_id}

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#use GoogleIamWorkforcePoolProviderKey#use}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#workforce_pool_id GoogleIamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#id GoogleIamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#timeouts GoogleIamWorkforcePoolProviderKey#timeouts}

---

### GoogleIamWorkforcePoolProviderKeyKeyData <a name="GoogleIamWorkforcePoolProviderKeyKeyData" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderKeyKeyData: googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.property.keySpec">keySpec</a></code> | <code>string</code> | The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]. |

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#key_spec GoogleIamWorkforcePoolProviderKey#key_spec}

---

### GoogleIamWorkforcePoolProviderKeyTimeouts <a name="GoogleIamWorkforcePoolProviderKeyTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderKeyTimeouts: googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#create GoogleIamWorkforcePoolProviderKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#delete GoogleIamWorkforcePoolProviderKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#create GoogleIamWorkforcePoolProviderKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_iam_workforce_pool_provider_key#delete GoogleIamWorkforcePoolProviderKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference <a name="GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime">notAfterTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime">notBeforeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput">keySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec">keySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `notAfterTime`<sup>Required</sup> <a name="notAfterTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime"></a>

```typescript
public readonly notAfterTime: string;
```

- *Type:* string

---

##### `notBeforeTime`<sup>Required</sup> <a name="notBeforeTime" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime"></a>

```typescript
public readonly notBeforeTime: string;
```

- *Type:* string

---

##### `keySpecInput`<sup>Optional</sup> <a name="keySpecInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput"></a>

```typescript
public readonly keySpecInput: string;
```

- *Type:* string

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderKeyKeyData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyKeyData">GoogleIamWorkforcePoolProviderKeyKeyData</a>

---


### GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProviderKey } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolProviderKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProviderKey.GoogleIamWorkforcePoolProviderKeyTimeouts">GoogleIamWorkforcePoolProviderKeyTimeouts</a>

---



