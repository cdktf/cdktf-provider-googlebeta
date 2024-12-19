# `googleSiteVerificationOwner` Submodule <a name="`googleSiteVerificationOwner` Submodule" id="@cdktf/provider-google-beta.googleSiteVerificationOwner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSiteVerificationOwner <a name="GoogleSiteVerificationOwner" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner google_site_verification_owner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

new googleSiteVerificationOwner.GoogleSiteVerificationOwner(scope: Construct, id: string, config: GoogleSiteVerificationOwnerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig">GoogleSiteVerificationOwnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig">GoogleSiteVerificationOwnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSiteVerificationOwnerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSiteVerificationOwner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isConstruct"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

googleSiteVerificationOwner.GoogleSiteVerificationOwner.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformElement"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformResource"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleSiteVerificationOwner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSiteVerificationOwner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSiteVerificationOwner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSiteVerificationOwner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference">GoogleSiteVerificationOwnerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.webResourceIdInput">webResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.webResourceId">webResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSiteVerificationOwnerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference">GoogleSiteVerificationOwnerTimeoutsOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSiteVerificationOwnerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a>

---

##### `webResourceIdInput`<sup>Optional</sup> <a name="webResourceIdInput" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.webResourceIdInput"></a>

```typescript
public readonly webResourceIdInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `webResourceId`<sup>Required</sup> <a name="webResourceId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.webResourceId"></a>

```typescript
public readonly webResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwner.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSiteVerificationOwnerConfig <a name="GoogleSiteVerificationOwnerConfig" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.Initializer"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

const googleSiteVerificationOwnerConfig: googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.email">email</a></code> | <code>string</code> | The email address of the owner. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.webResourceId">webResourceId</a></code> | <code>string</code> | The id of the Web Resource to add this owner to, in the form "webResource/<web-resource-id>". |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#id GoogleSiteVerificationOwner#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address of the owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#email GoogleSiteVerificationOwner#email}

---

##### `webResourceId`<sup>Required</sup> <a name="webResourceId" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.webResourceId"></a>

```typescript
public readonly webResourceId: string;
```

- *Type:* string

The id of the Web Resource to add this owner to, in the form "webResource/<web-resource-id>".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#web_resource_id GoogleSiteVerificationOwner#web_resource_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#id GoogleSiteVerificationOwner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSiteVerificationOwnerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#timeouts GoogleSiteVerificationOwner#timeouts}

---

### GoogleSiteVerificationOwnerTimeouts <a name="GoogleSiteVerificationOwnerTimeouts" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts.Initializer"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

const googleSiteVerificationOwnerTimeouts: googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#create GoogleSiteVerificationOwner#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#delete GoogleSiteVerificationOwner#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#create GoogleSiteVerificationOwner#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_site_verification_owner#delete GoogleSiteVerificationOwner#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSiteVerificationOwnerTimeoutsOutputReference <a name="GoogleSiteVerificationOwnerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSiteVerificationOwner } from '@cdktf/provider-google-beta'

new googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSiteVerificationOwnerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleSiteVerificationOwner.GoogleSiteVerificationOwnerTimeouts">GoogleSiteVerificationOwnerTimeouts</a>

---



