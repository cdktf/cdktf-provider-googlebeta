# `googleNetworkSecurityInterceptDeploymentGroup` Submodule <a name="`googleNetworkSecurityInterceptDeploymentGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityInterceptDeploymentGroup <a name="GoogleNetworkSecurityInterceptDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group google_network_security_intercept_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup(scope: Construct, id: string, config: GoogleNetworkSecurityInterceptDeploymentGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig">GoogleNetworkSecurityInterceptDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig">GoogleNetworkSecurityInterceptDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityInterceptDeploymentGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityInterceptDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityInterceptDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityInterceptDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups">connectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput">interceptDeploymentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId">interceptDeploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectedEndpointGroups`<sup>Required</sup> <a name="connectedEndpointGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups"></a>

```typescript
public readonly connectedEndpointGroups: GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interceptDeploymentGroupIdInput`<sup>Optional</sup> <a name="interceptDeploymentGroupIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput"></a>

```typescript
public readonly interceptDeploymentGroupIdInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityInterceptDeploymentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptDeploymentGroupId`<sup>Required</sup> <a name="interceptDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId"></a>

```typescript
public readonly interceptDeploymentGroupId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityInterceptDeploymentGroupConfig <a name="GoogleNetworkSecurityInterceptDeploymentGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityInterceptDeploymentGroupConfig: googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId">interceptDeploymentGroupId</a></code> | <code>string</code> | Required. Id of the requesting object If auto-generating Id server-side, remove this field and intercept_deployment_group_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.network">network</a></code> | <code>string</code> | Required. Immutable. The network that is being used for the deployment. Format is: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#id GoogleNetworkSecurityInterceptDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#project GoogleNetworkSecurityInterceptDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `interceptDeploymentGroupId`<sup>Required</sup> <a name="interceptDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId"></a>

```typescript
public readonly interceptDeploymentGroupId: string;
```

- *Type:* string

Required. Id of the requesting object If auto-generating Id server-side, remove this field and intercept_deployment_group_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#intercept_deployment_group_id GoogleNetworkSecurityInterceptDeploymentGroup#intercept_deployment_group_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'networksecurity.googleapis.com/InterceptDeploymentGroup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#location GoogleNetworkSecurityInterceptDeploymentGroup#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required. Immutable. The network that is being used for the deployment. Format is: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#network GoogleNetworkSecurityInterceptDeploymentGroup#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#id GoogleNetworkSecurityInterceptDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#labels GoogleNetworkSecurityInterceptDeploymentGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#project GoogleNetworkSecurityInterceptDeploymentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityInterceptDeploymentGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#timeouts GoogleNetworkSecurityInterceptDeploymentGroup#timeouts}

---

### GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups <a name="GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups: googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups = { ... }
```


### GoogleNetworkSecurityInterceptDeploymentGroupTimeouts <a name="GoogleNetworkSecurityInterceptDeploymentGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

const googleNetworkSecurityInterceptDeploymentGroupTimeouts: googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#create GoogleNetworkSecurityInterceptDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#delete GoogleNetworkSecurityInterceptDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#update GoogleNetworkSecurityInterceptDeploymentGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#create GoogleNetworkSecurityInterceptDeploymentGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#delete GoogleNetworkSecurityInterceptDeploymentGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_intercept_deployment_group#update GoogleNetworkSecurityInterceptDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList <a name="GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference <a name="GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">GoogleNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a>

---


### GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityInterceptDeploymentGroup } from '@cdktf/provider-google-beta'

new googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityInterceptDeploymentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptDeploymentGroup.GoogleNetworkSecurityInterceptDeploymentGroupTimeouts">GoogleNetworkSecurityInterceptDeploymentGroupTimeouts</a>

---



