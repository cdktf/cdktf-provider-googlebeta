# `googleProjectDefaultServiceAccounts` Submodule <a name="`googleProjectDefaultServiceAccounts` Submodule" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectDefaultServiceAccounts <a name="GoogleProjectDefaultServiceAccounts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts google_project_default_service_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

new googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts(scope: Construct, id: string, config: GoogleProjectDefaultServiceAccountsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig">GoogleProjectDefaultServiceAccountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig">GoogleProjectDefaultServiceAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleProjectDefaultServiceAccountsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetRestorePolicy"></a>

```typescript
public resetRestorePolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleProjectDefaultServiceAccounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleProjectDefaultServiceAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectDefaultServiceAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.serviceAccounts">serviceAccounts</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference">GoogleProjectDefaultServiceAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicyInput">restorePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicy">restorePolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceAccounts`<sup>Required</sup> <a name="serviceAccounts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleProjectDefaultServiceAccountsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference">GoogleProjectDefaultServiceAccountsTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicyInput"></a>

```typescript
public readonly restorePolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleProjectDefaultServiceAccountsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccounts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectDefaultServiceAccountsConfig <a name="GoogleProjectDefaultServiceAccountsConfig" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.Initializer"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

const googleProjectDefaultServiceAccountsConfig: googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.action">action</a></code> | <code>string</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.project">project</a></code> | <code>string</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.restorePolicy">restorePolicy</a></code> | <code>string</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
				Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#action GoogleProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#project GoogleProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#id GoogleProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.restorePolicy"></a>

```typescript
public readonly restorePolicy: string;
```

- *Type:* string

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#restore_policy GoogleProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleProjectDefaultServiceAccountsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#timeouts GoogleProjectDefaultServiceAccounts#timeouts}

---

### GoogleProjectDefaultServiceAccountsTimeouts <a name="GoogleProjectDefaultServiceAccountsTimeouts" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.Initializer"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

const googleProjectDefaultServiceAccountsTimeouts: googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#create GoogleProjectDefaultServiceAccounts#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#delete GoogleProjectDefaultServiceAccounts#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_project_default_service_accounts#read GoogleProjectDefaultServiceAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectDefaultServiceAccountsTimeoutsOutputReference <a name="GoogleProjectDefaultServiceAccountsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleProjectDefaultServiceAccounts } from '@cdktf/provider-google-beta'

new googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleProjectDefaultServiceAccountsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectDefaultServiceAccounts.GoogleProjectDefaultServiceAccountsTimeouts">GoogleProjectDefaultServiceAccountsTimeouts</a>

---



