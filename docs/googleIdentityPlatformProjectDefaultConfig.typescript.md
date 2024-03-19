# `googleIdentityPlatformProjectDefaultConfig` Submodule <a name="`googleIdentityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformProjectDefaultConfig <a name="GoogleIdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig(scope: Construct, id: string, config?: GoogleIdentityPlatformProjectDefaultConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig">GoogleIdentityPlatformProjectDefaultConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig">GoogleIdentityPlatformProjectDefaultConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn"></a>

```typescript
public putSignIn(value: GoogleIdentityPlatformProjectDefaultConfigSignIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIdentityPlatformProjectDefaultConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```typescript
public resetSignIn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIdentityPlatformProjectDefaultConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIdentityPlatformProjectDefaultConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformProjectDefaultConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference">GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signIn"></a>

```typescript
public readonly signIn: GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference">GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```typescript
public readonly signInInput: GoogleIdentityPlatformProjectDefaultConfigSignIn;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIdentityPlatformProjectDefaultConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformProjectDefaultConfigConfig <a name="GoogleIdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigConfig: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}.

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```typescript
public readonly signIn: GoogleIdentityPlatformProjectDefaultConfigSignIn;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#sign_in GoogleIdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIdentityPlatformProjectDefaultConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#timeouts GoogleIdentityPlatformProjectDefaultConfig#timeouts}

---

### GoogleIdentityPlatformProjectDefaultConfigSignIn <a name="GoogleIdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigSignIn: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allowDuplicateEmails`<sup>Optional</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```typescript
public readonly allowDuplicateEmails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#allow_duplicate_emails GoogleIdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```typescript
public readonly anonymous: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#anonymous GoogleIdentityPlatformProjectDefaultConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```typescript
public readonly email: GoogleIdentityPlatformProjectDefaultConfigSignInEmail;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#email GoogleIdentityPlatformProjectDefaultConfig#email}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#phone_number GoogleIdentityPlatformProjectDefaultConfig#phone_number}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous <a name="GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigSignInAnonymous: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInEmail <a name="GoogleIdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigSignInEmail: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">passwordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `passwordRequired`<sup>Optional</sup> <a name="passwordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```typescript
public readonly passwordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#password_required GoogleIdentityPlatformProjectDefaultConfig#password_required}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigSignInHashConfig: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig = { ... }
```


### GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigSignInPhoneNumber: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>{[ key: string ]: string}</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `testPhoneNumbers`<sup>Optional</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```typescript
public readonly testPhoneNumbers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#test_phone_numbers GoogleIdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### GoogleIdentityPlatformProjectDefaultConfigTimeouts <a name="GoogleIdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformProjectDefaultConfigTimeouts: googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.21.0/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">resetPasswordRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPasswordRequired` <a name="resetPasswordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```typescript
public resetPasswordRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">passwordRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">passwordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordRequiredInput`<sup>Optional</sup> <a name="passwordRequiredInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```typescript
public readonly passwordRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordRequired`<sup>Required</sup> <a name="passwordRequired" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```typescript
public readonly passwordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformProjectDefaultConfigSignInEmail;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```typescript
public get(index: number): GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">memoryCost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">saltSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">signerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `memoryCost`<sup>Required</sup> <a name="memoryCost" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```typescript
public readonly memoryCost: number;
```

- *Type:* number

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```typescript
public readonly rounds: number;
```

- *Type:* number

---

##### `saltSeparator`<sup>Required</sup> <a name="saltSeparator" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```typescript
public readonly saltSeparator: string;
```

- *Type:* string

---

##### `signerKey`<sup>Required</sup> <a name="signerKey" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```typescript
public readonly signerKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">putAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">putPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">resetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">resetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnonymous` <a name="putAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```typescript
public putAnonymous(value: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `putEmail` <a name="putEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```typescript
public putEmail(value: GoogleIdentityPlatformProjectDefaultConfigSignInEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `putPhoneNumber` <a name="putPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```typescript
public putPhoneNumber(value: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `resetAllowDuplicateEmails` <a name="resetAllowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```typescript
public resetAllowDuplicateEmails(): void
```

##### `resetAnonymous` <a name="resetAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```typescript
public resetAnonymous(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">hashConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">allowDuplicateEmailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">anonymousInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```typescript
public readonly anonymous: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```typescript
public readonly email: GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `hashConfig`<sup>Required</sup> <a name="hashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```typescript
public readonly hashConfig: GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `allowDuplicateEmailsInput`<sup>Optional</sup> <a name="allowDuplicateEmailsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```typescript
public readonly allowDuplicateEmailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anonymousInput`<sup>Optional</sup> <a name="anonymousInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```typescript
public readonly anonymousInput: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: GoogleIdentityPlatformProjectDefaultConfigSignInEmail;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `allowDuplicateEmails`<sup>Required</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```typescript
public readonly allowDuplicateEmails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformProjectDefaultConfigSignIn;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">resetTestPhoneNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTestPhoneNumbers` <a name="resetTestPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```typescript
public resetTestPhoneNumbers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">testPhoneNumbersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testPhoneNumbersInput`<sup>Optional</sup> <a name="testPhoneNumbersInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```typescript
public readonly testPhoneNumbersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testPhoneNumbers`<sup>Required</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```typescript
public readonly testPhoneNumbers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformProjectDefaultConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIdentityPlatformProjectDefaultConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

---



