# `googleProjectIamAuditConfig` Submodule <a name="`googleProjectIamAuditConfig` Submodule" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectIamAuditConfig <a name="GoogleProjectIamAuditConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config google_project_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

new googleProjectIamAuditConfig.GoogleProjectIamAuditConfig(scope: Construct, id: string, config: GoogleProjectIamAuditConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig">GoogleProjectIamAuditConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig">GoogleProjectIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.putAuditLogConfig">putAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuditLogConfig` <a name="putAuditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.putAuditLogConfig"></a>

```typescript
public putAuditLogConfig(value: IResolvable | GoogleProjectIamAuditConfigAuditLogConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleProjectIamAuditConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleProjectIamAuditConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleProjectIamAuditConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleProjectIamAuditConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectIamAuditConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList">GoogleProjectIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfigInput">auditLogConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: GoogleProjectIamAuditConfigAuditLogConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList">GoogleProjectIamAuditConfigAuditLogConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `auditLogConfigInput`<sup>Optional</sup> <a name="auditLogConfigInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.auditLogConfigInput"></a>

```typescript
public readonly auditLogConfigInput: IResolvable | GoogleProjectIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectIamAuditConfigAuditLogConfig <a name="GoogleProjectIamAuditConfigAuditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.Initializer"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

const googleProjectIamAuditConfigAuditLogConfig: googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.logType">logType</a></code> | <code>string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.exemptedMembers">exemptedMembers</a></code> | <code>string[]</code> | Identities that do not cause logging for this type of permission. |

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#log_type GoogleProjectIamAuditConfig#log_type}

---

##### `exemptedMembers`<sup>Optional</sup> <a name="exemptedMembers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```typescript
public readonly exemptedMembers: string[];
```

- *Type:* string[]

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#exempted_members GoogleProjectIamAuditConfig#exempted_members}

---

### GoogleProjectIamAuditConfigConfig <a name="GoogleProjectIamAuditConfigConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.Initializer"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

const googleProjectIamAuditConfigConfig: googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.auditLogConfig">auditLogConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#project GoogleProjectIamAuditConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.service">service</a></code> | <code>string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#id GoogleProjectIamAuditConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: IResolvable | GoogleProjectIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#audit_log_config GoogleProjectIamAuditConfig#audit_log_config}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#project GoogleProjectIamAuditConfig#project}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#service GoogleProjectIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_iam_audit_config#id GoogleProjectIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectIamAuditConfigAuditLogConfigList <a name="GoogleProjectIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

new googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.get"></a>

```typescript
public get(index: number): GoogleProjectIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleProjectIamAuditConfigAuditLogConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>[]

---


### GoogleProjectIamAuditConfigAuditLogConfigOutputReference <a name="GoogleProjectIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```typescript
import { googleProjectIamAuditConfig } from '@cdktf/provider-google-beta'

new googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">resetExemptedMembers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExemptedMembers` <a name="resetExemptedMembers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```typescript
public resetExemptedMembers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">exemptedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">exemptedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exemptedMembersInput`<sup>Optional</sup> <a name="exemptedMembersInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```typescript
public readonly exemptedMembersInput: string[];
```

- *Type:* string[]

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `exemptedMembers`<sup>Required</sup> <a name="exemptedMembers" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```typescript
public readonly exemptedMembers: string[];
```

- *Type:* string[]

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleProjectIamAuditConfigAuditLogConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleProjectIamAuditConfig.GoogleProjectIamAuditConfigAuditLogConfig">GoogleProjectIamAuditConfigAuditLogConfig</a>

---



